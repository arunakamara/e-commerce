import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "./CartSlice";
import { toast } from "react-toastify";
import withNavigateHook from "./hoc/withNavigateHook";
import "./Cart.css";

const CartItem = (props) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return parseInt(item.price) * item.quantity;
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    props.navigation("/e-commerce/product-list");
  };

  const handleIncrement = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseInt(item.price) * item.quantity;
    });
    return total;
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    console.log(cart.length);
    if (cart.length === 0)
      return toast(
        <strong style={{ fontSize: "1.5rem" }}>Your Cart is empty</strong>
      );
    else {
      props.navigation("/e-commerce/check-out");
    }
  };

  return (
    <div className="cart-container">
      <h2 className="total-cart-amount">
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              className="cart-item-image"
              src={item.image}
              alt={item.title}
            />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.title}</div>
              <div className="cart-item-cost">${item.price}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      ></div>
      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={(e) => handleContinueShopping(e)}
        >
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default withNavigateHook(CartItem);
