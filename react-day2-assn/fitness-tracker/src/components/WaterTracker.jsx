import React from "react";

const WaterTracker = ({ water, setWater }) => {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold">💧 Water</h2>
      <p>{water} glasses</p>
      <button
        className="bg-teal-500 text-white px-3 py-1 rounded mt-2"
        onClick={() => setWater(water + 1)}
      >
        +1 Glass
      </button>
    </div>
  );
};

export default WaterTracker;
