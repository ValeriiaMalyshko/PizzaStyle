import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";
import icon from "../../assets/pizza.svg";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <div className={s.card}>
          <img
            src={icon}
            alt="Pizza"
            width={44}
            height={35}
            className={s.img}
          ></img>
          <p className={s.name}>PizzaStyle</p>
        </div>
        <nav className={s.nav}>
          <Link to="/" className={s.link}>
            Pizza
          </Link>
          <Link to="/cart" className={s.link}>
            Cart
          </Link>
        </nav>
      </header>
    </>
  );
}
