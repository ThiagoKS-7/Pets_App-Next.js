import {
    StyledList,
    StyledListItem,
    StyledImg,
    StyledInfo,
    StyledName,
    StyledDescription,
} from './DefaultList.styles'

import {Pet} from '../../../data/@types/Pet'
import {TextService} from '../../../data/services/TextService'
import DefaultButton from '../DefaultButton/DefaultButton';

interface DefaultListProps{
    pets: Pet[];
    onClick: (pet: Pet | any) => void;
}

export default function DefaultList(props:DefaultListProps) {
    const tamanhoMaximoTexto = 200;
    return (
        <StyledList>
                {props.pets.map(pet => (
                    <StyledListItem key={pet.id}>
                        <StyledImg src={pet.foto} alt={pet.nome}/>
                        <StyledInfo>
                            <StyledName>{pet.nome}</StyledName>
                            <StyledDescription>
                              {TextService.truncateText(pet.historia, tamanhoMaximoTexto)}
                            </StyledDescription>
                            <DefaultButton onClick={props.onClick} variant="contained">Adotar {pet.nome}</DefaultButton>
                        </StyledInfo>
                    </StyledListItem>
                ))}
        </StyledList>
    )
}