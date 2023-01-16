import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { CartContextProvider } from '../contexts/CartContent'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

// its possible to optimize image size/rendering on nextjs
// see in the nextjs doc about 'next/image';