import React from "react";

const CaloriesTracker = ({ calories, setCalories }) => {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold">🔥 Calories</h2>
      <p>{calories} kcal</p>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded mt-2"
        onClick={() => setCalories(calories + 100)}
      >
        +100 kcal
      </button>
    </div>
  );
};

export default CaloriesTracker;
