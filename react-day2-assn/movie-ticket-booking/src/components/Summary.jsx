import React from "react";

const Summary = ({ movie, selectedSeats, confirmed, onConfirm }) => {
  const totalCost = selectedSeats.length * movie.pricePerSeat;

  return (
    <div className="p-4 border rounded-lg bg-gray-100">
      <h2 className="text-lg font-bold">Booking Summary</h2>

      {selectedSeats.length === 0 ? (
        <p>No seats selected</p>
      ) : (
        <div>
          <p>Seats: {selectedSeats.join(", ")}</p>
          <p>Tickets: {selectedSeats.length}</p>
          <p>Total: ₹{totalCost}</p>
        </div>
      )}

      {confirmed ? (
        <p className="text-green-600 font-bold mt-2">✅ Booking Confirmed!</p>
      ) : (
        <button
          onClick={onConfirm}
          disabled={selectedSeats.length === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        >
          Confirm Booking
        </button>
      )}
    </div>
  );
};

export default Summary;
