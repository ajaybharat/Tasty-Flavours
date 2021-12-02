import React, { useState } from "react";
import Cart from "./components/Cart/cart";
import Layout from "./components/Header/Header";
import Meals from "./components/Meals/meals";

function App() {
  const [showCart, setshowCart] = useState(false);
  const cartbuttonHandler = (e) => {
    setshowCart(!showCart);
  };
  return (
    <div className="app">
      {showCart && <Cart onClose={cartbuttonHandler} />}
      <Layout onClickCartButton={cartbuttonHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
