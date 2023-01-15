import Link from "next/link";
import logoImg from "../../assets/logo.svg";
import { Cart } from "../Cart";
import { HeaderContainer } from "./styles";

export function Header() {
  return(
    <HeaderContainer>
      <Link href={'/'}>
        <img src={logoImg.src} />
      </Link>

      <Cart />
    </HeaderContainer>
  )
}