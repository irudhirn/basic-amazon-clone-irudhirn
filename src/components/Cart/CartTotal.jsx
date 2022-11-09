import React, { useContext } from "react";

import CartContext from "../store/cart-context";

import classes from "./CartTotal.module.css";

const CartTotal = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes["cart__total"]}>
      <h2>Cart Total</h2>
      <div className={classes["cart__total--quantity"]}>
        Total Cart Items: <h3>{cartCtx.totalQuantity}</h3>
      </div>
      <div className={classes["cart__total--amount"]}>
        Total Amount: <h3>₹{cartCtx.totalAmount.toLocaleString("en-IN")}</h3>
      </div>
    </div>
  );
};

export default CartTotal;
