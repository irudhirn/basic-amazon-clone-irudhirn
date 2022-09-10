import React from "react";

const CartContext = React.createContext({
  items: [],
  totalQuantity: 3,
  totalAmount: 99.99,
  addItem: (item) => {},
  increaseItem: (item) => {},
  removeItem: (id) => {},
  onLoad: () => {},
});

export default CartContext;
