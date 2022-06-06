import {
    Container,
    StyledTitle,
    StyledSubTitle,
} from "./DefaultDescription.style"


/*QUANDO FOR CRIAR ALGUMA PROP, AO INVÉS DE USAR ANY, CRIAR UMA INTERFACE ESPECIFICANDO O TIPO DE CADA COISA*/
interface MainDescriptionProps {
    titulo: string;
    subtitulo?: string | JSX.Element; 
}

export default function MainDescription(props: MainDescriptionProps) {
    return (
        <Container>
            <StyledTitle>
                {props.titulo}
            </StyledTitle>
            <StyledSubTitle>
                {props.subtitulo}
            </StyledSubTitle>
        </Container>

    )
}