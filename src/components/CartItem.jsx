import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const parseCost = (cost) => {
  const parsed = parseFloat(cost.replace(/[^0-9.]/g, ""));
  return isNaN(parsed) ? 0 : parsed;
};

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();

  
  const cartItems = useSelector((state) => state.cart.items) || [];

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * parseCost(item.cost), 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Total: ${(item.quantity * parseCost(item.cost)).toFixed(2)}
                </div>
                <button className="cart-item-delete" onClick={() => dispatch(removeItem(item.name))}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart-message">Your cart is empty.</p>
        )}
      </div>
      <div className="continue_shopping_btn">
        <button className="btn1" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button className="btn2" onClick={() => alert("🚀 Checkout feature coming soon!")}> Checkout </button>
      </div>
    </div>
  );
};

export default CartItem;
