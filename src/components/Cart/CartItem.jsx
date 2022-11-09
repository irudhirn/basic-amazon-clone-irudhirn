import React from "react";
import { useContext } from "react";

import CartContext from "../store/cart-context";
import CartItemForm from "./CartItemForm";

import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const { id, title, img, description, price, quantity } = item;

  const cartCtx = useContext(CartContext);

  return (
    <li className={classes.cartitem}>
      <div className={classes["cartitem__img"]}>
        <img src={img} alt={title} />
      </div>
      <div className={classes["cartitem__info"]}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>Price: ₹{price.toLocaleString("en-IN")}</h4>
        <CartItemForm id={id} item={item} quantity={quantity} />
        <div className={classes["cartitem__amount"]}>
          <h4>Amount: ₹{(quantity * price).toLocaleString("en-IN")}</h4>
        </div>
        <button onClick={() => cartCtx.removeItem(id)}>Remove Item</button>
      </div>
    </li>
  );
};

export default CartItem;
