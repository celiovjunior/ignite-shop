import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from "./styles";

export function Cart() {
  const { cartItems } = useCart()
  const cartQuantity  = cartItems.length

  return(
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Itens selecionados</h2>

          <section>
            {cartQuantity <= 0 && <p>Seu carrinho está vazio 😔</p> }

            {
              cartItems.map(cartItem => (
                <CartProduct key={cartItem.id}>
                  <CartProductImage>
                    <Image
                      src={cartItem.imageUrl}
                      width={100}
                      height={93}
                      alt={cartItem.name}
                    />
                  </CartProductImage>
                  <CartProductDetails>
                    <p>{cartItem.name}</p>
                    <strong>{cartItem.price}</strong>
                    <button onClick={() => console.log("remove")}>Remover</button>
                  </CartProductDetails>
                </CartProduct>
              ))
            }
          </section>

          <CartFinalization>

            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>{cartQuantity} {cartQuantity > 1 ? 'itens' : 'item'} </p>
              </div>  
              <div>
                <span>Valor total</span>
                <p>R$ 100,00</p>
              </div>
            </FinalizationDetails>
            
            <button>Finalizar compra</button>
          </CartFinalization>

        </CartContent>
      </Dialog.Portal>

    </Dialog.Root>
  )
}