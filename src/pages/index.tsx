import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from 'next';
import Image from "next/image";
import Link from 'next/link';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import { HomeContainer, Product } from "../styles/pages/home";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">

      {
        products.map(product => {
          return(
            <Link href={`/product/${product.id}`} key={product.id}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt={""} />
        
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })
      }
            
    </HomeContainer>
  )
}

// chamada api do stripe
export const getStaticProps: GetStaticProps = async() => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
 
  const products = response.data.map(item => {
    const price = item.default_price as Stripe.Price

    return {
      id: item.id,
      name: item.name,
      imageUrl: item.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2,
  } 
}