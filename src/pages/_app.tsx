import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material"
import tema from '../ui/themes/tema'
import Header from '../ui/components/Header/Header'
import HeaderAdmin from '../ui/components/HeaderAdmin/HeaderAdmin'
import { useRouter } from 'next/router'

/*TEMPLATE PADRÃO, QUE SERÁ REPETIDO EM TODAS AS VIEWS*/
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={tema}>
        {router.pathname == '/' ? <Header/> : <HeaderAdmin/>};
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
