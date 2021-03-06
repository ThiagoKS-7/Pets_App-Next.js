import { Snackbar } from '@mui/material'
import type { NextPage } from 'next'
import { useIndex } from '../data/hooks/pages/useIndex'
import MainDescription from '../ui/components/DefaultDescription/DefaultDescription'
import DefaultList from '../ui/components/DefaultList/DefaultList'
import DefaultModal from '../ui/components/DefaultModal/DefaultModal'

/* Componentes são funcões retornando html*/
function Container(props:any) {
  return <div>{props.children}</div>
}


const Home: NextPage = () => {
  const {
    petsList,
    selectedPet,
    snack,
    message,
    email,
    value,
    setEmail,
    setValue,
    setSelectedPet,
    adopt,
  } = useIndex();

  return (
    <Container>
      <MainDescription titulo="" subtitulo={
        <span>
          Com um pequeno valor mensal, você<br/>
          pode <strong>adotar um pet virtualmente.</strong>
        </span>
      }/>
      <DefaultList pets={petsList} onClick={(pet) => setSelectedPet(pet)}/>
      <DefaultModal 
        open={selectedPet != null} 
        firstField={'E-mail'}
        firstValue={email}
        firstOnChange={(e)=>setEmail(e.target.value)}
        secondField={'Quantia por mês'}
        secondValue={value}
        secondOnChange={(e)=>setValue(e.target.value)}
        cancel={'Cancelar'}
        onCancel={() => setSelectedPet(null)}
        onClose={()=>setSelectedPet(null)}
        confirm={'Confirmar adoção'}
        onConfirm={() => adopt()}
      />
      <Snackbar open={snack} message={message}/>
    </Container>
  )
}

export default Home
