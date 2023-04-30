import React from "react";
import { Link } from "react-router-dom";
import s from "./Cart.module.css";
import { useSelector } from "react-redux";
import OrderCard from "../../components/OrderCard/OrderCard";
import { clearCart } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart?.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <>
      {cart?.length === 0 ? (
        <div>
          <h2>
            Please, choose pizza <Link to="/">here</Link>
          </h2>
        </div>
      ) : (
        <div>
          <h3>Pizza Cart</h3>
          {cart?.map((item) => (
            <OrderCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              quantity={item.quantity}
            />
          ))}
          <button
            type="button"
            className={s.btn}
            onClick={() => dispatch(clearCart())}
          >
            Make an order
          </button>

          <p className={s.p}>
            total ({getTotal().totalQuantity} items) :{" "}
            <strong> UAH {getTotal().totalPrice}</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
