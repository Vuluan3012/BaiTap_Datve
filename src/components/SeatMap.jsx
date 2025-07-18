import React, { useState } from "react";
import seatData from "../data/seatList.json";
import SeatList from "./SeatList";
import SelectedTable from "./SelectedTable";

export default function SeatMap() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  const toggleSeat = (seat) => {
    if (seat.daDat) return;

    const exists = selectedSeats.find((s) => s.soGhe === seat.soGhe);
    if (exists) {
      setSelectedSeats(selectedSeats.filter((s) => s.soGhe !== seat.soGhe));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleBooking = () => {
    if (!customer.name || !customer.email || !customer.phone) {
      alert("Vui lòng nhập đầy đủ thông tin khách hàng.");
      return;
    }
    alert("Đặt vé thành công!");
    window.location.reload();
  };

  const handleCancel = () => {
    setSelectedSeats([]);
    setCustomer({ name: "", email: "", phone: "" });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8">
      <div className="flex-1 text-center">
        <div className="bg-orange-500 h-5 mb-4 rounded w-4/5 mx-auto">Màn Hình</div>
        <div className="grid grid-cols-13 justify-center mb-2">
      <div></div>
          {[...Array(12)].map((_, i) => (
            <div key={i} className="text-white font-semibold">{i + 1}</div>
          ))}
        </div>
        <SeatList data={seatData} selectedSeats={selectedSeats} toggleSeat={toggleSeat} />
        <div className="mt-4 flex justify-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            Ghế đã đặt
          </div>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-green-500 rounded"></div>
            Ghế đang chọn
          </div>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-white border rounded"></div>
            Ghế chưa đặt
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm bg-white text-black p-4 rounded">
        <h2 className="text-xl font-bold text-center mb-4">THÔNG TIN ĐẶT VÉ</h2>
        <div className="space-y-2 mb-4">
          <input name="name" placeholder="Họ tên" value={customer.name} onChange={handleInput} className="w-full p-2 border rounded" />
          <input name="email" placeholder="Email" value={customer.email} onChange={handleInput} className="w-full p-2 border rounded" />
          <input name="phone" placeholder="Số điện thoại" value={customer.phone} onChange={handleInput} className="w-full p-2 border rounded" />
        </div>
        <SelectedTable selectedSeats={selectedSeats} />
        <div className="flex justify-between mt-4">
          <button onClick={handleCancel} className="bg-gray-700 text-white px-4 py-2 rounded">Huỷ chọn</button>
          <button onClick={handleBooking} className="bg-blue-600 text-white px-4 py-2 rounded">Đặt vé</button>
        </div>
      </div>
    </div>
  );
}
