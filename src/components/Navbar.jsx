import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CartIcon from "./Cart/CartIcon";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.header}>
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
          className={classes["header__logo"]}
        />
      </Link>

      <div className={classes["header__search"]}>
        <input type="text" className={classes["header__searchInput"]} />
        <span className={classes["header__searchIcon"]}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>

      <Link to="/cart">
        <CartIcon />
      </Link>
    </nav>
  );
};

export default Navbar;
