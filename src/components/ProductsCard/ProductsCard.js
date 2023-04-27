import React from "react";
// import s from "./TweetCard.module.css";

export default function ProductsCard({ id, title, description, price, image }) {
  return (
    <li id={id}>
      <div>
        <img src={image} alt={title}></img>
      </div>
      <div>{title}</div>
      <div> {description}</div>
      <div>{price} $</div>
      <button>Add to cart</button>
    </li>
  );
}
