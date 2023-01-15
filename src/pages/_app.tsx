import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}

// its possible to optimize image size/rendering on nextjs
// see in the nextjs doc about 'next/image';