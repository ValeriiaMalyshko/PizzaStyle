import React from "react";
import s from "./OrderCard.module.css";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/slice/slice";

export default function OrderCard({
  id,
  title,
  description,
  price,
  image,
  quantity,
}) {
  const dispatch = useDispatch();

  return (
    <li id={id} className={s.li}>
      <div>
        <img src={image} alt={title} className={s.img}></img>
      </div>
      <p className={s.title}>{title}</p>
      <p className={s.description}> {description}</p>
      <p className={s.price}>{price} UAH</p>
      <div className={s.row}>
        <button
          className={s.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrementQuantity(id))}
        >
          -
        </button>
        <span className={s.value}>{quantity}</span>
        <button
          className={s.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementQuantity(id))}
        >
          +
        </button>
      </div>
      <div>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
