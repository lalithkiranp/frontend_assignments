import React, { useState } from "react";
import SeatSelector from "./SeatSelector";
import Summary from "./Summary";

const MovieBooking = () => {
  const movie = {
    title: "Inception",
    timing: "7:30 PM",
    pricePerSeat: 200,
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  // Handle seat selection
  const toggleSeat = (seat) => {
    if (confirmed) return; // prevent changes after confirmation
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // Confirm booking
  const confirmBooking = () => {
    if (selectedSeats.length > 0) {
      setConfirmed(true);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">🎬 Movie Ticket Booking</h1>
      <p className="mb-4">
        {movie.title} - {movie.timing} (₹{movie.pricePerSeat}/seat)
      </p>

      <SeatSelector
        movie={movie}
        selectedSeats={selectedSeats}
        toggleSeat={toggleSeat}
      />

      <Summary
        movie={movie}
        selectedSeats={selectedSeats}
        confirmed={confirmed}
        onConfirm={confirmBooking}
      />
    </div>
  );
};

export default MovieBooking;
