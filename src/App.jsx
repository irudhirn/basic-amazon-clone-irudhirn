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
    //   cartCtx.onLoad();
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

/*

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

*/
