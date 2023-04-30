import React from "react";
import ProductCard from "../../components/ProductsCard/ProductCard";
import s from "./ProductsList.module.css";

const ProductsList = ({ elements }) => {
  return (
    <ul className={s.ul}>
      {elements.map(({ id, title, description, price, image, quantity }) => {
        return (
          <ProductCard
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
