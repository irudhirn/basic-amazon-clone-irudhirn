import React from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

import CartContext from "./components/store/cart-context";

function App() {
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart")) === null) {
      return;
    }
    if (JSON.parse(localStorage.getItem("cart")).items.length !== 0) {
      cartCtx.loadCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
