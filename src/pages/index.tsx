import type { NextPage } from 'next'
import MainDescription from '../ui/components/DefaultDescription/DefaultDescription'

/* ATOMS */

/* Componentes são funcões retornando html*/
function Container(props:any) {
  return <div>{props.children}</div>
}


const Home: NextPage = () => {
  return (
    <Container>
      <MainDescription titulo="Teste titulo" subtitulo="Teste subtitulo"/>
    </Container>
  )
}

export default Home
