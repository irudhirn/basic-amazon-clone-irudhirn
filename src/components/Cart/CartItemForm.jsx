import React from "react";

import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../store/cart-context";
import classes from "./CartItemForm.module.css";

const CartItemForm = ({ id, item }) => {
  const [quantity, setQuantity] = useState();
  const [isFirstLoad, setIsFirstload] = useState(true);

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const val = cartCtx.items.find((item) => item.id === id);
    setQuantity(() => val.quantity);
  }, []);

  useEffect(() => {
    if (!isFirstLoad) {
      cartCtx.increaseItem({ ...item, quantity: quantity });
    }
    setIsFirstload(() => false);
  }, [quantity]);

  // const quantityRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    // const enteredQuantity = quantityRef.current.value;
    // const enteredQuantityNumber = +enteredQuantity;
    // setQuantity(() => enteredQuantityNumber);

    // cartCtx.increaseItem({ ...item, quantity: enteredQuantityNumber });
    // cartCtx.increaseItem({ ...item, quantity: quantity });
  };

  const increaseHandler = () => {
    if (quantity === 10) {
      return;
    }
    setQuantity((prev) => prev + 1);
  };

  const decreaseHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  return (
    <div
      className={classes["cartitem__info--quantity"]}
      onSubmit={submitHandler}
    >
      <label>Quantity:</label>

      <button type="button" onClick={() => decreaseHandler()}>
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <span>{quantity}</span>

      <button type="button" onClick={() => increaseHandler()}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default CartItemForm;

/* <button type="button">
    <FontAwesomeIcon icon={faPlus} />
  </button> */

/*
<button type="button">
    <FontAwesomeIcon icon={faMinus} />
  </button> */

/*
  
  <input
        ref={quantityRef}
        // value={quantity}
        defaultValue={quantity}
        type="number"
        min={1}
        max={10}
        step={1}
        onBlur={retainState}
        // onChange={(e) => setQuantity(() => e.target.value)}
        className={classes.input}
      />
  
  */
