import {useState} from 'react';
import {Pet} from '../../@types/Pet'

export function useIndex() {
    const [petsList, setPetsList] = useState(
        [
            {
              id: 1,
              nome: "Bidu",
              historia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci lacus, scelerisque id tincidunt in, hendrerit in tortor.Morbi in odio vel urna varius feugiat.Integer orci tortor, placerat lobortis scelerisque a, accumsan sit amet ligula. Nunc lacinia posuere porttitor. Praesent fringilla libero vitae nulla dignissim vehicula.",
              foto:"https://st2.depositphotos.com/2166845/5890/i/450/depositphotos_58906929-stock-photo-cairn-terrier-puppy.jpg",
    
            },
            {
              id: 2,
              nome: "Aggy",
              historia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci lacus, scelerisque id tincidunt in, hendrerit in tortor.Morbi in odio vel urna varius feugiat.Integer orci tortor, placerat lobortis scelerisque a, accumsan sit amet ligula. Nunc lacinia posuere porttitor. Praesent fringilla libero vitae nulla dignissim vehicula.",
              foto:"https://st3.depositphotos.com/11328482/34011/i/450/depositphotos_340118510-stock-photo-woman-holds-a-dog-on.jpg",
    
            },
            {
              id: 3,
              nome: "Baloo",
              historia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci lacus, scelerisque id tincidunt in, hendrerit in tortor.Morbi in odio vel urna varius feugiat.Integer orci tortor, placerat lobortis scelerisque a, accumsan sit amet ligula. Nunc lacinia posuere porttitor. Praesent fringilla libero vitae nulla dignissim vehicula.",
              foto:"https://st2.depositphotos.com/2222024/5609/i/450/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg",
    
            }
        ]
    );
    const [snack, setSnack] = useState(false);
    const [message, setMessage] = useState('');
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const [email, setEmail] = useState('');
    const [value, setValue] = useState('');

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
        setMessage,
        setSnack,
    }
}