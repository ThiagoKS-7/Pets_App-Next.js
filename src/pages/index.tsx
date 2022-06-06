import type { NextPage } from 'next'
import MainDescription from '../ui/components/DefaultDescription/DefaultDescription'
import DefaultList from '../ui/components/DefaultList/DefaultList'

/* ATOMS */

/* Componentes são funcões retornando html*/
function Container(props:any) {
  return <div>{props.children}</div>
}


const Home: NextPage = () => {
  return (
    <Container>
      <MainDescription titulo="" subtitulo={
        <span>
          Com um pequeno valor mensal, você<br/>
          pode <strong>adotar um pet virtualmente.</strong>
        </span>
      }/>
      <DefaultList/>
    </Container>
  )
}

export default Home
