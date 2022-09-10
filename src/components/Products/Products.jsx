import React from "react";

import Product from "./Product";

import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
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
  {
    id: 4,
    title: "Fire Boltt Smart Watch",
    img: "https://m.media-amazon.com/images/I/61KQQILpF7L._SY355_.jpg",
    description: '1.4", 8 days battery life',
    price: 2499,
  },
  {
    id: 5,
    title: "QUBO Smart Cam",
    img: "https://m.media-amazon.com/images/I/41lQeEqdDBL._AC_UL320_.jpg",
    description: "Wi-Fi, 360deg coverage",
    price: 2740,
  },
  {
    id: 6,
    title: "Skechers",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41uZzAHJJZL._AC_SR400,600_.jpg",
    description: "Women Go Run 400 Sneakers",
    price: 1242,
  },
  {
    id: 7,
    title: "Lenovo Legion",
    img: "https://m.media-amazon.com/images/I/71IGKyL5DhL._SY450_.jpg",
    description: "AMD Ryzen 7, Gaming Laptop",
    price: 129990,
  },
  {
    id: 8,
    title: "LG UHD Monitor",
    img: "https://m.media-amazon.com/images/I/716O20R9oLL._SY450_.jpg",
    description: "81.28cm, Inbuilt Speaker",
    price: 44444,
  },
  {
    id: 9,
    title: "Whirlpool Refrigerator",
    img: "https://m.media-amazon.com/images/I/61zy+v0CC1L._SX466_.jpg",
    description: "Invertor Technology",
    price: 15740,
  },
  {
    id: 10,
    title: "ASUS ROG Strix GA 15",
    img: "https://m.media-amazon.com/images/I/81WU9sPxhjL._AC_UL320_.jpg",
    description: "8 Core, AMD Ryzen 7 Gaming PC",
    price: 172990,
  },
  {
    id: 11,
    title: "Panasoni LUMIX G7",
    img: "https://m.media-amazon.com/images/I/91xnO7qHAeL._AC_UL320_.jpg",
    description: "16 MP, 4K Mirrorless Interchangeable",
    price: 40380,
  },
  {
    id: 12,
    title: "Golden Whey",
    img: "https://images-eu.ssl-images-amazon.com/images/I/419H-CaSxYL._AC_SR400,600_.jpg",
    description: "1 Kg, Premium Protein",
    price: 1649,
  },
];

const Products = () => {
  return (
    <div className={classes.products}>
      {DUMMY_PRODUCTS.map((item) => {
        const { id, title, img, description, price } = item;

        return (
          <Product
            key={id}
            id={id}
            title={title}
            img={img}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default Products;
