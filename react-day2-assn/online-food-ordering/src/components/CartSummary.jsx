import React from "react";

const CartSummary = ({ cart, total }) => {
  return (
    <div className="mt-5 p-4 border rounded-lg bg-gray-100">
      <h2 className="text-lg font-bold">Cart Summary</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} = ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-2 font-bold">Total: ₹{total}</h3>
    </div>
  );
};

export default CartSummary;
