import React from "react";
import products from "./product.json";
import ProductCard from "./ProductCard";
import "./App.css";

const ProductList = () => {
  return (
    <div className="container">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category.name}
          image={item.images[0]} 
        />
      ))}
    </div>
  );
};

export default ProductList;
