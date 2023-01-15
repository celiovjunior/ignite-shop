import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CartButton } from "../CartButton";
import { CartClose, CartContent } from "./styles";

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
            <p>Seu carrinho está vazio</p>
          </section>

        </CartContent>
      </Dialog.Portal>

    </Dialog.Root>
  )
}