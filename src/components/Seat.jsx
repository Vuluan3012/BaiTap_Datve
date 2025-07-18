export default function Seat({ seat, selectedSeats, toggleSeat }) {
  const isSelected = selectedSeats.find((s) => s.soGhe === seat.soGhe);

  const getBgColor = () => {
    if (seat.daDat) return "bg-gray-400";
    if (isSelected) return "bg-green-500";
    return "bg-white text-black";
  };

  return (
    <button
      onClick={() => toggleSeat(seat)}
      className={`w-8 h-8 rounded  ${getBgColor()} font-bold`}
      disabled={seat.daDat}
    >
      {seat.soGhe.replace(/^[A-Z]/, "")}
    </button>
  );
}
