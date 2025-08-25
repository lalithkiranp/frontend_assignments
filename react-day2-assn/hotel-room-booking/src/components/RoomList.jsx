import React, { useState } from "react";
import RoomCard from "./RoomCard";
import Summary from "./Summary";

const RoomList = () => {
  const rooms = [
    { id: 1, type: "Single Room", price: 1500, available: true },
    { id: 2, type: "Double Room", price: 2500, available: true },
    { id: 3, type: "Suite", price: 4000, available: false },
  ];

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Calculate nights between two dates
  const calculateNights = (inDate, outDate) => {
    if (!inDate || !outDate) return 0;
    const diff = new Date(outDate) - new Date(inDate);
    return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
  };

  const nights = calculateNights(checkIn, checkOut);
  const totalPrice = selectedRoom ? nights * selectedRoom.price : 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🏨 Hotel Room Reservation</h1>

      {/* Date selection */}
      <div className="mb-6">
        <label className="mr-3">
          Check-in:{" "}
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border px-2 py-1"
          />
        </label>
        <label>
          Check-out:{" "}
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border px-2 py-1"
          />
        </label>
      </div>

      {/* Room list */}
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            selected={selectedRoom?.id === room.id}
            onSelect={() => setSelectedRoom(room)}
          />
        ))}
      </div>

      {/* Summary */}
      <Summary
        checkIn={checkIn}
        checkOut={checkOut}
        room={selectedRoom}
        nights={nights}
        total={totalPrice}
      />
    </div>
  );
};

export default RoomList;
