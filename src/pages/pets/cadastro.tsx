import {NextPage} from 'next';
import { useState } from 'react';
import { useCadastro } from '../../data/hooks/pages/pets/useCadastro';
import DefaultDescription from '../../ui/components/DefaultDescription/DefaultDescription';
import GridItem from '../../ui/components/GridItem/GridItem';

const Cadastro: NextPage = () => {
    const [test,setTest] = useState(''); 
    return (
        <>
        <DefaultDescription titulo={'Cadastro de Pets para Adoção'} subtitulo={'Preencha os dados do novo Pet'}/>
        <GridItem type="text" value={test} onChange={(e:any) => setTest(e.target.value)}>
            <span>Nome</span>
        </GridItem>
        <StyledButton onClick={() => {console.log('a')}} variant="contained">Cadastrar pet</StyledButton>
        </>
    )
}

export default Cadastro;