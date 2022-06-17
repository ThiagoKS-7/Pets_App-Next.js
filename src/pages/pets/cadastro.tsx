import {NextPage} from 'next';
import { useState } from 'react';
import { useCadastro } from '../../data/hooks/pages/pets/useCadastro';
import DefaultDescription from '../../ui/components/DefaultDescription/DefaultDescription';
import GridItem from '../../ui/components/GridItem/GridItem';
import {Paper, Grid, TextField, Button, Snackbar} from '@mui/material';
import DefaultButton from '../../ui/components/DefaultButton/DefaultButton';

const Cadastro: NextPage = () => {
    const {
        nome,
        historia,
        foto,
        mensagem,
        setNome,
        setHistoria,
        setFoto,
        setMensagem,
        cadastrar,
      } = useCadastro();
    return (
        <>
            <DefaultDescription titulo={'Cadastro de Pets para Adoção'} subtitulo={'Preencha os dados do novo Pet'}/>
            <Paper sx={{maxWidth: 970, mx:'auto', p: 7}}>
                <Grid container spacing={3}>
                    <GridItem 
                        type="text"
                        value={nome}
                        onChange={(e:any) => setNome(e.target.value)}
                        placeholder="Nome do Pet"
                    >
                        <span>Nome</span>
                    </GridItem>
                    <Grid item xs={12}>
                        <TextField
                            value={historia}
                            onChange={(e:any) => setHistoria(e.target.value)}
                            label={'História do Pet'}
                            placeholder={'História do Pet'}
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={foto}
                            onChange={(e:any) => setFoto(e.target.value)}
                            label={'Foto do Pet'}
                            placeholder={'Foto do Pet'}
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{mt:2}}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}
                        >
                            Enviar Imagem
                        </Button>
                    </Grid>
     
                   <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button
                            variant="contained"
                            sx={{maxWidth: {md:200}, mt:4}}
                            fullWidth
                            onClick={cadastrar}
                        >
                            Cadastrar Pet
                        </Button>
                   </Grid>
                </Grid>
            </Paper>

            <Snackbar
                open={mensagem.length > 0}
                autoHideDuration={2500}
                onClose={() => setMensagem('')}
                message={mensagem}
            />
        </>
    )
}

export default Cadastro;