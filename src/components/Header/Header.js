import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";
import icon from "../../assets/pizza.svg";
import icon2 from "../../assets/order.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

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
            <img
              src={icon2}
              alt="Order"
              width={30}
              height={30}
              className={s.img}
            ></img>
            <p>{getTotalQuantity() || 0}</p>
          </Link>
        </nav>
      </header>
    </>
  );
}
