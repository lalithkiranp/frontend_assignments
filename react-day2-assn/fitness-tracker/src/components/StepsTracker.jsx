import React from "react";

const StepsTracker = ({ steps, setSteps }) => {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold">👟 Steps</h2>
      <p>{steps} steps</p>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
        onClick={() => setSteps(steps + 500)}
      >
        +500 Steps
      </button>
    </div>
  );
};

export default StepsTracker;
