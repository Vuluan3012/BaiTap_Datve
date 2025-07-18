import React from "react";
import Seat from "./Seat";

const SeatRow = ({ row, selectedSeats, toggleSeat }) => {
  return (
    <div className="flex items-center mb-2">
      <div className="w-6 mr-2 text-white font-bold">{row.hang}</div>
      <div className="grid grid-cols-12 gap-2">
        {row.danhSachGhe.map((num) => {
          const seatId = `${row.hang}${num}`;
          return (
            <Seat
              key={seatId}
              seatId={seatId}
              selected={selectedSeats.includes(seatId)}
              onSelect={() => toggleSeat(seatId)}
              daDat={["A11", "A12"].includes(seatId)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SeatRow;
