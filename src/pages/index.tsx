import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import tee1 from '../assets/shirt01.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tee1.src} width={520} height={480} alt={""} />

        <footer>
          <strong>T-Shirt X</strong>
          <span>US$ 35.29</span>
        </footer>
      </Product>

      <Product>
        <Image src={tee1.src} width={520} height={480} alt={""} />

        <footer>
          <strong>T-Shirt X</strong>
          <span>US$ 35.29</span>
        </footer>
      </Product>
      
    </HomeContainer>
  )
}

// file-system routing
// roteamento baseado em arquivos fisicos