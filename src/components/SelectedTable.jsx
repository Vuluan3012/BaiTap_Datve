export default function SelectedTable({ selectedSeats }) {
  const total = selectedSeats.reduce((sum, seat) => sum + seat.gia, 0);
  return (
    <div>
      <p className="italic text-sm">
        Ghế đã chọn:{" "}
        {selectedSeats.length > 0 ? selectedSeats.map((s) => s.soGhe).join(", ") : "Chưa chọn ghế nào"}
      </p>
      <p>Số lượng ghế: <b>{selectedSeats.length}</b></p>
      <p>Tổng tiền: <b className="text-blue-600">{total.toLocaleString()} VND</b></p>
    </div>
  );
}
