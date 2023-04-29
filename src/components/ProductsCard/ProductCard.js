import React from "react";
import s from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slice/cartSlice";

export default function ProductCard({
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
      <div className={s.title}>{title}</div>
      <div className={s.description}> {description}</div>
      <div className={s.price}>{price} $</div>
      <div>
        <button
          className={s.btn}
          type="button"
          onClick={() =>
            dispatch(
              addToCart({
                id: id,
                title: title,
                description: description,
                price: price,
                image: image,
              })
            )
          }
        >
          Add to cart
        </button>
      </div>
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
    </li>
  );
}
