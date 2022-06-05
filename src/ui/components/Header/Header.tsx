import {
    DefaultHeader,
    Logo
} from './Header.style'

export default function Cabecalho() {
    return (
        <DefaultHeader>
            <Logo src="/imagens/logo.svg" alt="Adote um pet"/>
        </DefaultHeader>
    )
}