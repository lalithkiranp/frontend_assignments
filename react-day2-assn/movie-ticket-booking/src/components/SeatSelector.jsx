import React from "react";

const SeatSelector = ({ movie, selectedSeats, toggleSeat }) => {
  // Example seat layout
  const seats = ["A1", "A2", "A3", "B1", "B2", "B3"];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold">Select Seats</h2>
      <div className="grid grid-cols-3 gap-3 mt-3">
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            className={`px-4 py-2 rounded ${
              selectedSeats.includes(seat)
                ? "bg-green-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {seat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatSelector;
