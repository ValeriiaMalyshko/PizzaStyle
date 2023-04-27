import React from "react";
import s from "./ProductsCard.module.css";

export default function ProductsCard({ id, title, description, price, image }) {
  return (
    <li id={id} className={s.li}>
      <div>
        <img src={image} alt={title} className={s.img}></img>
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.description}> {description}</div>
      <div className={s.price}>{price} UAH</div>
      <button className={s.btn}>Add to cart</button>
    </li>
  );
}
