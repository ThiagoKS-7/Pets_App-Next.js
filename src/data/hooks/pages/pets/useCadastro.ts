import { useState } from 'react';
import { ApiService } from '../../../services/ApiService';
import { AxiosError } from 'axios';

export function useCadastro() {
  const [nome, setNome] = useState(''),
      [historia,setHistoria] = useState(''),
      [foto,setFoto] = useState(''),
      [mensagem,setMensagem] = useState('');

  function cadastrar() {
    if (validarFormulario()) {
      ApiService.post('/pets/cadastro/', {
        nome,
        historia,
        foto
      })
        .then(() => {
          limpar();
          setMensagem('Pet cadastrado com sucesso!');
        })
        .catch((error: AxiosError) =>{
          setMensagem(error.response?.data?.message || 'Erro ao cadastrar pet');

        })
    }
  }
  
  function validarFormulario() {
    return nome.length > 0 && historia.length > 0  && foto.length > 0;
  }

  function limpar() {}

  return {
    nome,
    historia,
    foto,
    mensagem,
    setNome,
    setHistoria,
    setFoto,
    setMensagem,
    cadastrar,
  }
}