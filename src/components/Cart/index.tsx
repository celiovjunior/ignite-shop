import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "phosphor-react";
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartProduct, CartProductImage } from "./styles";

export function Cart() {
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
            {/* <p>Seu carrinho está vazio</p> */}

            <CartProduct>
              <CartProductImage>
                <Image
                  src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTVBDSGZIdTRKUXBuNVVufGZsX3Rlc3RfbERpOUFyWUdVNVFNbzMzUjYzTDNiSjdM00gXUzbg37&w=640&q=75"
                  width={100}
                  height={93}
                  alt=""
                />
              </CartProductImage>
            </CartProduct>
          </section>

        </CartContent>
      </Dialog.Portal>

    </Dialog.Root>
  )
}