import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import tee1 from '../assets/shirt01.png';
import { HomeContainer, Product } from "../styles/pages/home";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tee1.src} width={520} height={480} alt={""} />

        <footer>
          <strong>T-Shirt X</strong>
          <span>US$ 35.29</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tee1.src} width={520} height={480} alt={""} />

        <footer>
          <strong>T-Shirt X</strong>
          <span>US$ 35.29</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tee1.src} width={520} height={480} alt={""} />

        <footer>
          <strong>T-Shirt X</strong>
          <span>US$ 35.29</span>
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
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