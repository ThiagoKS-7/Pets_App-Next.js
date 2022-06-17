import {
    HeaderContainer,
    Logo,
    LinksContainer
}  from  './HeaderAdmin.style';
import NextLink from 'next/link';
import { Link, Box } from '@mui/material';

export default function HeaderAdmin() {
    return (
        <HeaderContainer>
            <div>
                <Logo src={'/imagens/logo.svg'} alt={'Adote um pet'}/>
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>
                            Cadastrar{' '}
                            <Box component={'span'} sx={{display:{sm: 'initial', xs: 'none'}}}>
                                novo pet
                            </Box>
                        </a>
                    </Link>
                    <Link component={NextLink}  href={'/pets/relatorio'}>
                        <a>
                            Relatório{' '}
                            <Box component={'span'} sx={{display:{sm: 'initial', xs: 'none'}}}>
                             de Adoção
                            </Box> 
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
    )
}