import React from "react";
import { useContext } from "react";

import CartContext from "../store/cart-context";

import classes from "./Product.module.css";

const Product = ({ id, title, img, description, price }) => {
  const cartCtx = useContext(CartContext);

  const item = {
    id,
    title,
    img,
    description,
    price,
  };

  return (
    <div className={classes.product}>
      <div className={classes["product__img"]}>
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>₹ {price}</h4>
      <button onClick={() => cartCtx.addItem(item)}>Add To Cart</button>
    </div>
  );
};

export default Product;
