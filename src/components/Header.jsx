import LogoSvg from "../assets/logo.svg";
import RingSvg from "../assets/ring.svg";
import SunSvg from "../assets/icons/sun.svg";
import ShoppingCartSvg from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./CartDetails";
import { useCarts } from "../hooks/useCarts";
import MoonSvg from "../assets/icons/moon.svg";
import { ThemeContext } from "../context";
import { toast } from "react-toastify";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartData, setCartData } = useCarts();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleRemoveToTheCart = (movie) => {
    const filter = cartData.filter((cart) => cart.id !== movie.id);
    setCartData(filter);
    toast(`Movie ${movie.title} has been removed !!!`,{
      position:"bottom-right",
      type:"success"
    })
  };
  return (
    <>
      {isOpen && (
        <CartDetails onClose={setIsOpen} onRemove={handleRemoveToTheCart} />
      )}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={LogoSvg} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={RingSvg} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setDarkMode(!darkMode)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={darkMode ? SunSvg : MoonSvg}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(true)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
                href="#"
              >
                {cartData.length > 0 && (
                  <p className="bg-green-600 text-white border-4 border-yellow-300 p-1 w-8 h-8 text-center rounded-full absolute bottom-5 left-4">
                    {cartData.length}
                  </p>
                )}
                <img
                  src={ShoppingCartSvg}
                  width="24"
                  height="24"
                  alt="Shopping-cart"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
