export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-10">
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            className="flex-grow border-2"
          />
          <select className="flex-grow">
            <option value="">Lọc bài viết</option>
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
            <option value="most-viewed">Xem nhiều nhất</option>
          </select>
        </div>
        <button className="bg-blue-600 rounded ml-10">Thêm bài viết</button>
      </div>
    </div>
  );
}
