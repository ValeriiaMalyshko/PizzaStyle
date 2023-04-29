import React from "react";
import { Link } from "react-router-dom";
// import s from "./UserList.module.css";
import { useSelector } from "react-redux";
import OrderCard from "../../components/OrderCard/OrderCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

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
      <div>
        <h2>
          Please, choose pizza <Link to="/">here</Link>
        </h2>
      </div>
      <div>
        <h3>Pizza Cart</h3>
        {cart?.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <p className="total__p">
          total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </>
  );
};

export default Cart;
