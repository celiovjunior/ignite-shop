import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { IProduct } from "../../contexts/CardContent"
import { useCart } from "../../hooks/useCart"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()  
  
  const { checkIfItemAlreadyExists, addToCart } = useCart()
  
  if (isFallback) {
    return <p>Loading...</p>
  }
  
  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id)
  
  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>

        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={itemAlreadyInCart} onClick={() => addToCart(product)}>
            { itemAlreadyInCart ? 'Produto já está no carrinho' : 'Adicionar no carrinho' }
          </button>
          
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

// requirido para pegar os params das rotas e mostar cada produto
export const getStaticPaths: GetStaticPaths = async () => {
  // pode ser implementado outras regras para visualização de produtos
  return {
    paths: [
      { params: { id: 'prod_N9VOuk8JUrMJ6n' } }
    ],
    fallback: "blocking",
    // true || false -> outros valores que podem associados...
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async({ params }) => {
  // buscando dados do produto
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        numberPrice: price.unit_amount! / 100,
        description: product.description,
        defaultPriceId: price.id,

      }
    },
    revalidate: 60 * 60 * 1, // 1 hora
  }
}