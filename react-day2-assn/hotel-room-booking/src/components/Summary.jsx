import React from "react";

const Summary = ({ checkIn, checkOut, room, nights, total }) => {
  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-100">
      <h2 className="text-lg font-bold">📋 Booking Summary</h2>
      {!room ? (
        <p>No room selected</p>
      ) : (
        <div>
          <p>Room: {room.type}</p>
          <p>Check-in: {checkIn || "Not selected"}</p>
          <p>Check-out: {checkOut || "Not selected"}</p>
          <p>Nights: {nights}</p>
          <p>Total Price: ₹{total}</p>
        </div>
      )}
    </div>
  );
};

export default Summary;
