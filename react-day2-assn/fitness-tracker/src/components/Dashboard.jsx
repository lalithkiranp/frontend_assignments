import React, { useState } from "react";
import StepsTracker from "./StepsTracker";
import CaloriesTracker from "./CaloriesTracker";
import WaterTracker from "./WaterTracker";
import Summary from "./Summary";

const Dashboard = () => {
  const user = {
    name: "Lalith",
    age: 24,
    weight: 70,
  };

  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">🏋️ Fitness Tracker Dashboard</h1>
      <p className="mb-4">
        {user.name}, Age: {user.age}, Weight: {user.weight}kg
      </p>

      {/* Trackers */}
      <div className="grid grid-cols-3 gap-4">
        <StepsTracker steps={steps} setSteps={setSteps} />
        <CaloriesTracker calories={calories} setCalories={setCalories} />
        <WaterTracker water={water} setWater={setWater} />
      </div>

      {/* Summary */}
      <Summary steps={steps} calories={calories} water={water} />
    </div>
  );
};

export default Dashboard;
