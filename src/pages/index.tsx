import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import { MouseEvent } from 'react';
import Stripe from 'stripe';
import { CartButton } from '../components/CartButton';
import { IProduct } from '../contexts/CardContent';
import { useCart } from '../hooks/useCart';
import { stripe } from '../lib/stripe';
import { HomeContainer, Product } from "../styles/pages/home";

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const { addToCart } = useCart()

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      
      <HomeContainer ref={sliderRef} className="keen-slider">

        {
          products.map(product => {
            return(
              // prefetch={false} pode consumir muitos recursos do server em caso de ter muitos Links na tela
              <Link prefetch={false} href={`/product/${product.id}`} key={product.id}>
                <Product className="keen-slider__slide">
                  <Image src={product.imageUrl} width={520} height={480} alt={""} />
          
                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>
                    <CartButton color="green" size="large" onClick={(e) => handleAddToCart(e, product)} />
                  </footer>
                  
                </Product>
              </Link>
            )
          })
        }
              
      </HomeContainer>
    </>
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
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
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