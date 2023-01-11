import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

// its possible to optimize image size/rendering on nextjs
// see in the nextjs doc about 'next/image';