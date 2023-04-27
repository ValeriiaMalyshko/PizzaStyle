import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { products } from "./pages/PizzaPage/products.js";
import Header from "./components/Header/Header";
import ProductsList from "./pages/PizzaPage/ProductsList";
import Cart from "./pages/CartPage/Cart";

function App() {
  console.log(products);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList elements={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
