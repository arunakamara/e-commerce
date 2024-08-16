import React from "react";
import { useSelector } from "react-redux";
import "./CheckOut.css";

function CheckOut(props) {
  const cart = useSelector((state) => state.cart.items);

  const calculateTotalCost = (item) => {
    return parseInt(item.price) * item.quantity;
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseInt(item.price) * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <div className="check-out">
        <h2>Order Details</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title}:{" "}
              <span className="amount">${calculateTotalCost(item)}</span>
            </li>
          ))}
        </ul>
        <h2>Payment Details</h2>
        <p>
          <strong>Payment Method: </strong>Cash on Delivery
        </p>
        <p>
          <strong>Total Amount: </strong>
          <span className="amount">${calculateTotalAmount()}</span>
        </p>
        <div className="thanks">Thank you for shopping with us</div>
      </div>
    </div>
  );
}

export default CheckOut;
