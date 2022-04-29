import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../Components/NavBar'

import { Provider } from 'react-redux';
import { store } from '../Store/store';
import Head from 'next/head';
import icon from './favicon.ico'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store= {store}>
    <Head>
      <title>Mercado Libre - Envíos gratis en el día</title>
      <link rel="icon" href={icon} />
    </Head>
    <NavBar/>
    <Component {...pageProps} />
  </Provider>
    )
}

export default MyApp
