import {
    StyledList,
    StyledButton,
    StyledListItem,
    StyledImg,
    StyledInfo,
    StyledName,
    StyledDescription,
} from './DefaultList.styles'

import {Pet} from '../../../data/@types/Pet'
import {TextService} from '../../../data/services/TextService'

interface DefaultListProps{
    pets: Pet[];
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
                            <StyledButton variant="contained">Adotar {pet.nome}</StyledButton>
                        </StyledInfo>
                    </StyledListItem>
                ))}
        </StyledList>
    )
}