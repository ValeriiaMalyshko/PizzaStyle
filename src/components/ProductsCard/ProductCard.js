import React, { useState, useEffect } from "react";
import s from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/slice/cartSlice";

export default function ProductCard({ id, title, description, price, image }) {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const newCount = cart.find((item) => id === item.id);
      if (newCount) setCount(newCount.quantity);
    }
  }, [cart, id]);

  const handDecrement = () => {
    const newQuantity = cart.map((item) => item.quantity === 0);
    if (newQuantity) {
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
      <div className={s.description}> {description}</div>
      <div className={s.price}>{price} UAH</div>
      {!cart.find((item) => item.id === id) ? (
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
      ) : (
        <div className={s.row}>
          <button
            className={s.button}
            aria-label="Decrement value"
            onClick={handDecrement}
          >
            -
          </button>
          <span className={s.value}>{count}</span>
          <button
            className={s.button}
            aria-label="Increment value"
            onClick={() => dispatch(incrementQuantity(id))}
          >
            +
          </button>
        </div>
      )}
    </li>
  );
}
