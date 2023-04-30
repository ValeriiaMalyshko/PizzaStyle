import React from "react";
import s from "./OrderCard.module.css";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/slice/cartSlice";

export default function OrderCard({
  id,
  title,
  description,
  price,
  image,
  quantity = 0,
}) {
  const dispatch = useDispatch();

  const handDecrement = () => {
    if (quantity < 2) {
      dispatch(removeItem(id));
    } else {
      dispatch(decrementQuantity(id));
    }
  };

  return (
    <li id={id} className={s.li}>
      <div>
        <img src={image} alt={title} className={s.img}></img>
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.description}>{description}</div>
      <div className={s.price}>{price} UAH</div>
      <div className={s.row}>
        <button
          className={s.button}
          aria-label="Decrement value"
          onClick={handDecrement}
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
