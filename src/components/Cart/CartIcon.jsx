import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../store/cart-context";

import classes from "./CartIcon.module.css";

const CartIcon = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.cart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className={classes["cart__circle"]}>{cartCtx.totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
