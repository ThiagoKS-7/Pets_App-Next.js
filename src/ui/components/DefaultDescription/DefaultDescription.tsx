import {
    Container,
    StyledTitle,
    StyledSubTitle,
} from "./DefaultDescription.style"

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