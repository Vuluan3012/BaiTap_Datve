import React from "react";
import Seat from "./Seat";

export default function SeatList({ data, selectedSeats, toggleSeat }) {
  return (
<div className="grid grid-cols-13 gap-4">
      {data.map((row, i) => (
        <React.Fragment key={i}>
          <div className="font-bold flex items-center justify-center">{row.hang}</div>
          {row.danhSachGhe.map((seat, index) => (
            <Seat key={index} seat={seat} selectedSeats={selectedSeats} toggleSeat={toggleSeat} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
