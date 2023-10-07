import React, { useState } from "react";
import productsData from "../data/products";
import "../App.css";
import girlsTops from "../Images/GIRLS TOPS.jpg";
import menCargo from "../Images/MEN CARGO.jpg";
import menKurta from "../Images/MEN KURTA.jpg";
import menShirt from "../Images/SHIRT FOR MEN.jpeg";

const ProductList = ({ addToCart }) => {
  const [products] = useState(productsData);

  const product = [
    {
      id: 1,
      name: "Girls Tops",
      price: 10.99,
      image: girlsTops,
      category: "Category A",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Men Kurta",
      price: 19.99,
      image: menKurta,
      category: "Category B",
      rating: 3.8,
    },
    {
      id: 3,
      name: "Men Cargo",
      price: 7.49,
      image: menCargo,
      category: "Category A",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Men Shirt",
      price: 14.99,
      image: menShirt,
      category: "Category C",
      rating: 4.7,
    },
    // Add more products as needed
  ];
  
  

  return (
    <div className="product-list">
      {product.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
