import React from "react";
import ProductCard from "../../components/ProductsCard/ProductCard";
import s from "./ProductsList.module.css";

const ProductsList = ({ elements }) => {
  return (
    <ul className={s.ul}>
      {elements.map(
        ({ id, title, description, price, image, quantity = 0 }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              image={image}
              title={title}
              description={description}
              price={price}
              quantity={quantity}
            />
          );
        }
      )}
    </ul>
  );
};

export default ProductsList;
