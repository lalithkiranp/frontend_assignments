import React from "react";

const RoomCard = ({ room, selected, onSelect }) => {
  return (
    <div
      onClick={room.available ? onSelect : undefined}
      className={`p-4 border rounded-lg shadow cursor-pointer ${
        selected ? "bg-green-100 border-green-500" : "bg-white"
      } ${!room.available ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <h3 className="text-lg font-bold">{room.type}</h3>
      <p>₹{room.price} / night</p>
      <p>{room.available ? "Available" : "Not Available"}</p>
    </div>
  );
};

export default RoomCard;
