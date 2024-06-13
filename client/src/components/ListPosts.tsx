export default function ListPosts() {
  return (
    <div>
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
          <tr>
            <td className="border border-gray-300 p-2 text-center align-middle">
              1
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              States trong Reacts
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              anh
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              4/3/2024
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              đã xuất bản
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
          <tr>
            <td className="border border-gray-300 p-2 text-center align-middle">
              2
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              Props trong React
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              anh2
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              5/3/2024
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              đã xuất bản
            </td>
            <td className="border border-gray-300 p-2 text-center align-middle">
              <button className="mr-2 bg-gray-200 p-1 bg-yellow-500 rounded">
                Chặn
              </button>
              <button className="mr-2 bg-gray-200 p-1 bg-green-300 rounded">
                Sửa
              </button>
              <button className="bg-gray-200 p-1  bg-red-600 rounded">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
