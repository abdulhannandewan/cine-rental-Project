import Page from "./Page";

import CartProviders from "./providers/CartProviders";
import ThemeProvider from "./providers/ThemeProvider";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <CartProviders>
          <Page />
          <ToastContainer theme="dark" transition={Bounce} />
        </CartProviders>
      </ThemeProvider>
    </>
  );
};

export default App;
