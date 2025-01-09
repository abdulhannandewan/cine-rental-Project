import { useContext } from "react"
import { CartContext } from "../context"

const useCarts = () =>{
  return useContext(CartContext);
}
export {useCarts};