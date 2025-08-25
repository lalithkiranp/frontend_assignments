import React from "react";

const Summary = ({ steps, calories, water }) => {
  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-100">
      <h2 className="text-lg font-bold">📊 Daily Summary</h2>
      <p>Steps: {steps}</p>
      <p>Calories Burned: {calories} kcal</p>
      <p>Water Intake: {water} glasses</p>
    </div>
  );
};

export default Summary;
