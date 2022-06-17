import {NextPage} from 'next';
import DefaultDescription from '../../ui/components/DefaultDescription/DefaultDescription';
import DefaultTableTitle from '../../ui/components/DefaultTableTitle/DefaultTableTitle';
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';
import { useRelatorio } from '../../data/hooks/pages/pets/useRelatorio';

const Relatorio: NextPage = () =>  {
    const { listaRelatorio } = useRelatorio();
    return (
      <>
        <DefaultDescription titulo={'Relatório de Adoção'} subtitulo={'Veja a lista de pets adotados'}/>
        <TableContainer
            component={Paper}
            sx={{mx:'auto', p: {xs: 2, md: 4}}}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <DefaultTableTitle>
                                Pet
                            </DefaultTableTitle>
                        </TableCell>
                        <TableCell>
                            <DefaultTableTitle>
                                E-mail
                            </DefaultTableTitle>
                        </TableCell>  
                        <TableCell align={'right'}>
                            <DefaultTableTitle>
                                Valor Mensal
                            </DefaultTableTitle>
                        </TableCell>      
                    </TableRow>
                </TableHead>
                <TableBody>
                    { listaRelatorio.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.pet.nome}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell align={'right'}>{item.valor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </>
    )
}

export default Relatorio;