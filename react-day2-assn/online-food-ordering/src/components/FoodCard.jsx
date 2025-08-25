import React from "react";

const FoodCard = ({ food, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-3">
      <h3 className="text-xl font-semibold">{food.name}</h3>
      <p>{food.description}</p>
      <p className="font-bold">₹{food.price}</p>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
        onClick={() => addToCart(food)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
