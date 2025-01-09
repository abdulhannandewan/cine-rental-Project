import { useState } from "react";
import { CartContext } from "../context";

const CartProviders = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cartData, setCartData }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProviders;
