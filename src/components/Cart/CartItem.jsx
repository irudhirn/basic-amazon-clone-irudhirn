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
        <h4>Price: ₹{price}</h4>
        <CartItemForm id={id} item={item} quantity={quantity} />
        <div className={classes["cartitem__amount"]}>
          <h4>Amount: ₹{quantity * price}</h4>
        </div>
        <button onClick={() => cartCtx.removeItem(id)}>Remove Item</button>
      </div>
    </li>
  );
};

export default CartItem;

/* <div className={classes.cartitem}>
        <div className={classes["cartitem__img"]}>
          <img src={DUMMY_EXPENSES[1].img} alt={DUMMY_EXPENSES[1].title} />
        </div>
        <div className={classes["cartitem__info"]}>
          <h2>{DUMMY_EXPENSES[1].title}</h2>
          <p>{DUMMY_EXPENSES[1].description}</p>
          <h4>₹ {DUMMY_EXPENSES[1].price}</h4>
          <form className={classes["cartitem__info--quantity"]}>
            <label htmlFor="quantity">Quantity</label>
            <button type="button">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              max="10"
              step="1"
            />
            <button type="button">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </form>
        </div>
      </div>
      <div className={classes.cartitem}>
        <div className={classes["cartitem__img"]}>
          <img src={DUMMY_EXPENSES[2].img} alt={DUMMY_EXPENSES[2].title} />
        </div>
        <div className={classes["cartitem__info"]}>
          <h2>{DUMMY_EXPENSES[2].title}</h2>
          <p>{DUMMY_EXPENSES[2].description}</p>
          <h4>₹ {DUMMY_EXPENSES[2].price}</h4>
          <form className={classes["cartitem__info--quantity"]}>
            <label htmlFor="quantity">Quantity</label>
            <button type="button">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              max="10"
              step="1"
            />
            <button type="button">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </form>
        </div>
      </div> */

/*

const DUMMY_EXPENSES = [
  //   {
  //     id: "1",
  //     title: "boAt Airdopes",
  //     img: "https://m.media-amazon.com/images/I/51EAQs9-rvL._AC_SY195_.jpg",
  //     description: "True Wireless Earbuds",
  //     quantity: "1",
  //     price: "1799",
  //   },
  //   {
  //     id: "2",
  //     title: "Google Pixel 6",
  //     img: "https://m.media-amazon.com/images/I/71adnun6E8L._AC_UY218_.jpg",
  //     description: "8GB RAM, 128G Storage",
  //     quantity: "2",
  //     price: "56700",
  //   },
  //   {
  //     id: "3",
  //     title: "2020 Apple iPad Air",
  //     img: "https://m.media-amazon.com/images/I/71LJWOMyP4L._SX522_.jpg",
  //     description: "A14 Bionic Chip(4th generation)",
  //     quantity: "3",
  //     price: "56900",
  //   },
  // {
  //   id: "4",
  //   title: "Fire Boltt Smart Watch",
  //   img: "https://m.media-amazon.com/images/I/61KQQILpF7L._SY355_.jpg",
  //   description: '1.4", 8 days battery life',
  //   quantity: "8",
  //   price: "2499",
  // },
  // {
  //   id: "5",
  //   title: "QUBO Smart Cam",
  //   img: "https://m.media-amazon.com/images/I/41lQeEqdDBL._AC_UL320_.jpg",
  //   description: "Wi-Fi, 360deg coverage",
  //   quantity: "9",
  //   price: "2740",
  // },
  // {
  //   id: "6",
  //   title: "Skechers",
  //   img: "https://images-eu.ssl-images-amazon.com/images/I/41uZzAHJJZL._AC_SR400,600_.jpg",
  //   description: "Women Go Run 400 Sneakers",
  //   quantity: "1",
  //   price: "1242",
  // },
  // {
  //   id: "7",
  //   title: "Lenovo Legion",
  //   img: "https://m.media-amazon.com/images/I/71IGKyL5DhL._SY450_.jpg",
  //   description: "AMD Ryzen 7, Gaming Laptop",
  //   quantity: "5",
  //   price: "129990",
  // },
  // {
  //   id: "8",
  //   title: "LG UHD Monitor",
  //   img: "https://m.media-amazon.com/images/I/716O20R9oLL._SY450_.jpg",
  //   description: "81.28cm, Inbuilt Speaker",
  //   quantity: "3",
  //   price: "44444",
  // },
  // {
  //   id: "9",
  //   title: "Whirlpool Refrigerator",
  //   img: "https://m.media-amazon.com/images/I/61zy+v0CC1L._SX466_.jpg",
  //   description: "Invertor Technology",
  //   quantity: "1",
  //   price: "15740",
  // },
  // {
  //   id: "10",
  //   title: "ASUS ROG Strix GA 15",
  //   img: "https://m.media-amazon.com/images/I/81WU9sPxhjL._AC_UL320_.jpg",
  //   description: "8 Core, AMD Ryzen 7 Gaming PC",
  //   quantity: "5",
  //   price: "172990",
  // },
  // {
  //   id: "11",
  //   title: "Panasoni LUMIX G7",
  //   img: "https://m.media-amazon.com/images/I/91xnO7qHAeL._AC_UL320_.jpg",
  //   description: "16 MP, 4K Mirrorless Interchangeable",
  //   quantity: "4",
  //   price: "40380",
  // },
  // {
  //   id: "12",
  //   title: "Golden Whey",
  //   img: "https://images-eu.ssl-images-amazon.com/images/I/419H-CaSxYL._AC_SR400,600_.jpg",
  //   description: "1 Kg, Premium Protein",
  //   quantity: "2",
  //   price: "1649",
  // },
];


*/
