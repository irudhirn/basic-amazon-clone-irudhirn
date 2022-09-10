import React from "react";
import { useContext } from "react";

import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import CartContext from "../store/cart-context";

import classes from "./Cart.module.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.cart}>
      {!cartCtx.items.length && (
        <h1 style={{ padding: "16px" }}>No Items in your cart</h1>
      )}
      {cartCtx.items.length !== 0 && (
        <>
          <ul>
            {cartCtx.items.map((item) => {
              const { id } = item;
              return <CartItem key={id} item={item} />;
            })}
          </ul>
          <CartTotal />
        </>
      )}
    </div>
  );
};

export default Cart;
