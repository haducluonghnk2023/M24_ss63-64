import { AxiosResponse } from "axios";
import baseUrl from "./api";
import "./App.css";
import { useEffect, useState } from "react";
import Post from "./model/post";
// import debounce from "lodash.debounce";

export default function App() {
  const [post, setPost] = useState<Post[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const loadData = () => {
    baseUrl
      .get(`post?title_like=${inputValue}`)
      .then((res: AxiosResponse) => setPost(res.data))
      .catch((err) => console.log(err));
  };

  // gọi component khi render lần đầu
  useEffect(() => {
    loadData();
  }, []);

  // gọi khi nhập giá tri tìm kiếm , thay đổi số lượng trang và chuyển trang
  useEffect(() => {
    loadData();
  }, [inputValue]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-10">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập từ khóa tìm kiếm"
            type="text"
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
      <br />
      <table className="border border-collapse border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">STT</th>
            <th className="border border-gray-300 p-2">Tiêu đề</th>
            <th className="border border-gray-300 p-2">Hình ảnh</th>
            <th className="border border-gray-300 p-2">Ngày viết</th>
            <th className="border border-gray-300 p-2">Trạng thái</th>
            <th className="border border-gray-300 p-2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {post.map((post: Post, index: number) => (
            <tr>
              <td className="border border-gray-300 p-2 text-center align-middle">
                {index + 1}
              </td>
              <td className="border border-gray-300 p-2 text-center align-middle">
                {post.title}
              </td>
              <td className="border border-gray-300 p-2 text-center align-middle">
                {post.image}
              </td>
              <td className="border border-gray-300 p-2 text-center align-middle">
                {post.created_at}
              </td>
              <td className="border border-gray-300 p-2 text-center align-middle">
                {post.status}
              </td>
              <td className="border border-gray-300 p-2 text-center align-middle">
                <button className="mr-2 bg-gray-200 p-1 bg-yellow-500 rounded">
                  Chặn
                </button>
                <button className="mr-2 bg-gray-200 p-1 bg-green-300 rounded">
                  Sửa
                </button>
                <button className="bg-gray-200 p-1 bg-red-600 rounded">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Thêm mới bài viết</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Tên bài viết
            </label>
            <input
              id="title"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Hình ảnh
            </label>
            <input
              id="image"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Nội dung
            </label>
            <textarea
              id="content"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Làm mới
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Xuất bản
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
