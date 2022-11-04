import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";

import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const reducer = (state, action) => {
  if (action.type === "LOAD") {
    console.log(state);

    return {
      ...state,
      items: action.payload.items,
      totalQuantity: action.payload.totalQuantity,
      totalAmount: action.payload.totalAmount,
    };
  }

  if (action.type === "ADD") {
    const newItem = state.items.find(
      (item) => item.title === action.payload.title
    );
    if (newItem) {
      alert("Item already is in the cart");
      return { ...state };
    }

    if (!newItem) {
      const updatedItem = { ...action.payload, quantity: 1 };
      const updatedItems = state.items.concat(updatedItem);
      const updatedQuantity = updatedItems.reduce(
        (acc, cur) => acc + cur.quantity,
        0
      );
      const updatedAmount = updatedItems.reduce(
        (acc, cur) => acc + cur.quantity * cur.price,
        0
      );
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          items: updatedItems,
          totalQuantity: updatedQuantity,
          totalAmount: updatedAmount,
        })
      );

      console.log(state);
      return {
        ...state,
        items: updatedItems,
        totalQuantity: updatedQuantity,
        totalAmount: updatedAmount,
      };
    }
  }

  if (action.type === "INCREASE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const existingItem = state.items[existingItemIndex];

    const updatedItem = {
      ...existingItem,
      quantity: +action.payload.quantity,
    };

    let updatedItems = [...state.items];
    updatedItems[existingItemIndex] = updatedItem;

    const updatedAmount = updatedItems.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    const updatedQuantity = updatedItems.reduce(
      (acc, cur) => acc + cur.quantity,
      0
    );

    localStorage.setItem(
      "cart",
      JSON.stringify({
        ...state,
        items: updatedItems,
        totalQuantity: updatedQuantity,
        totalAmount: updatedAmount,
      })
    );

    console.log(state);
    return {
      ...state,
      items: updatedItems,
      totalQuantity: updatedQuantity,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    const itemToBeRemoved = state.items.find(
      (item) => item.id === action.payload
    );
    const updatedQuantity = state.totalQuantity - itemToBeRemoved.quantity;
    const updatedAmount =
      state.totalAmount - itemToBeRemoved.quantity * itemToBeRemoved.price;

    localStorage.setItem(
      "cart",
      JSON.stringify({
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalQuantity: updatedQuantity,
        totalAmount: updatedAmount,
      })
    );

    console.log(state);
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
      totalQuantity: updatedQuantity,
      totalAmount: updatedAmount,
    };
  }
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadCartHandler = (cartData) => {
    dispatch({ type: "LOAD", payload: cartData });
  };

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const increaseItemInCartHandler = (item) => {
    dispatch({ type: "INCREASE", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: state.items,
    totalQuantity: state.totalQuantity,
    totalAmount: state.totalAmount,
    loadCart: loadCartHandler,
    addItem: addItemToCartHandler,
    increaseItem: increaseItemInCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

/*

{
  id: 1,
  title: "boAt Airdopes",
  img: "https://m.media-amazon.com/images/I/51EAQs9-rvL._AC_SY195_.jpg",
  description: "True Wireless Earbuds",
  price: 1799,
},
{
  id: 2,
  title: "Google Pixel 6",
  img: "https://m.media-amazon.com/images/I/71adnun6E8L._AC_UY218_.jpg",
  description: "8GB RAM, 128G Storage",
  price: 56700,
},
{
  id: 3,
  title: "2020 Apple iPad Air",
  img: "https://m.media-amazon.com/images/I/71LJWOMyP4L._SX522_.jpg",
  description: "A14 Bionic Chip(4th generation)",
  price: 56900,
},

*/
