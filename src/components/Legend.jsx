export default function Legend() {
  return (
    <div className="mt-6 flex justify-center gap-4 text-sm">
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 bg-gray-400 rounded"></div>
        <span>Ghế chưa đặt</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 bg-green-500 rounded"></div>
        <span>Ghế đang chọn</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-6 h-6 bg-red-500 rounded"></div>
        <span>Ghế đã đặt</span>
      </div>
    </div>
  );
}
