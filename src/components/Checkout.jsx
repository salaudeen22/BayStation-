import React from "react";

function CheckoutSummary({ selectedItems, onClose }) {
  return (
    <div className="checkout-summary-overlay">
      <div className="checkout-summary" id="checkout-box">
        <h2>Order Summary</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              {item.title} - ₹{item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total:₹ {selectedItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
