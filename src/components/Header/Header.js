import React from "react";
import { Link } from "react-router-dom";
// import s from './Header.module.css';
import icon from "../../assets/pizza.svg";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <img src={icon} alt="Pizza" width={44} height={35}></img>
          <p>PizzaStyle</p>
        </div>
        <nav>
          <Link to="/">Pizza</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
    </>
  );
}
