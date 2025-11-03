import React from "react";
import "./App.css";

const ProductCard = ({ title, price, description, category, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>Category: {category}</h4>
      <p>{description ? description : "No description available."}</p>
      <h2>${price}</h2>
    </div>
  );
};

export default ProductCard;
