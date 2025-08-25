import React, { useState } from "react";
import FoodCard from "./FoodCard";
import CartSummary from "./CartSummary";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const foodItems = [
    { name: "Pizza", price: 200, description: "Cheesy delight" },
    { name: "Burger", price: 120, description: "Loaded with veggies" },
    { name: "Pasta", price: 150, description: "Creamy white sauce" },
  ];

  // Add item to cart
  const addToCart = (food) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.name === food.name);
      if (existing) {
        return prevCart.map((item) =>
          item.name === food.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...food, quantity: 1 }];
      }
    });
  };

  // Calculate total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🍴 Online Food Ordering</h1>
      
      {/* Food Items */}
      <div className="grid grid-cols-2 gap-4">
        {foodItems.map((food, index) => (
          <FoodCard key={index} food={food} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Summary */}
      <CartSummary cart={cart} total={totalAmount} />
    </div>
  );
};

export default Menu;
