import React, { useState } from "react";
import Cart from "./components/Cart/cart";
import Layout from "./components/Header/Header";
import Meals from "./components/Meals/meals";
import CartProvider from "./store/carProvider";

function App() {
  const [showCart, setshowCart] = useState(false);
  const cartbuttonHandler = (e) => {
    setshowCart(!showCart);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={cartbuttonHandler} />}
      <Layout onClickCartButton={cartbuttonHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
