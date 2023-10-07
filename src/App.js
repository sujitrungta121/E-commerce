import React, { useState } from "react";
import "./App.css";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import Checkout from "./Component/checkout";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Website</h1>
      </header>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Checkout cart={cart} total={calculateTotal()} />
    </div>
  );
}

export default App;
