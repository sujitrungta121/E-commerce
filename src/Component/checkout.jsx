import React from "react";
import "../App.css";
const Checkout = ({ cart, total }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
