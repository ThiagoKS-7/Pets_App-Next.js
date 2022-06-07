import { AxiosError } from 'axios';
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import {useState, useEffect} from 'react';
import {Pet} from '../../@types/Pet'
import {ApiService } from '../../services/ApiService'

export function useIndex() {
    const [petsList, setPetsList] = useState<Pet[]>([]),
        [snack, setSnack] = useState(false),
        [selectedPet, setSelectedPet] = useState<Pet | null>(null),
        [message, setMessage] = useState(''),
        [email, setEmail] = useState(''),
        [value, setValue] = useState('');

    /*TUDO QUE FOR ATUALIZADO ELE RODA DNV (se tiver algo no [] funciona como watch, se não tiver funfa como mounted)*/
    useEffect(() => {
        ApiService.get('/pets/')
            .then((response:any) => {
                setPetsList(response.data);
            });
    }, [])
        
    /* CONTROLA O FLUXO DE SALVAR OS DADOS DO MODAL */
    function adopt() {
        if (selectedPet !== null) {
            if(hasValidData()) {
                ApiService.post('/adocoes/cadastro/', {
                    pet_id:selectedPet.id,
                    email,
                    valor: value,
                })
                    .then(() => {
                        setSelectedPet(null);
                        setMessage("Salvo com sucesso!");
                        clearForm();
                    })
                    .catch((error: AxiosError) => {
                        setMessage(error.response?.data.message);
                    })              
            } else {
                setMessage("Erro! Todos os campos devem ser preenchidos.");
            }
                setSnack(true);
                setTimeout(() => {
                setSnack(false);
                setSelectedPet(null);
                }, 1600);
        }
    }

    function hasValidData() {
        return email.length > 0 && value.length > 0; 
    }

    function clearForm() {
        setEmail('');
        setValue('');
    }

        
    return {
        petsList,
        snack,
        message,
        email,
        value,
        setEmail,
        setValue,
        selectedPet,
        setSelectedPet,
        adopt,
    }
}