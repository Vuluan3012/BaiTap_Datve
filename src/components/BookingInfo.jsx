import { useState } from "react";

export default function BookingInfo({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Họ tên"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Số điện thoại"
        value={form.phone}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
      />
      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded"
      >
        ĐẶT VÉ
      </button>
    </form>
  );
}
