import { useContext } from "react";
import { CartContext } from "../contexts/CardContent";

export function useCart() {
  return useContext(CartContext)
}