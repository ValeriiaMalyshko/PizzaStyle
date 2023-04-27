import React from "react";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import s from "./PizzaPage.module.css";

const ProductsList = ({ elements }) => {
  return (
    <ul className={s.ul}>
      {elements.map(({ id, title, description, price, image }) => {
        return (
          <ProductsCard
            key={id}
            id={id}
            image={image}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
