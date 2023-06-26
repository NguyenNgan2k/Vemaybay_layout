import FormSearchTicket from "./form/formSearchTicket";
import IgVe from "./assets/img/resize.jpg";
import IgUuDai from "./assets/img/resize2.png";
import Flight from "./layout/flight";
function App() {
  return (
    <div className="font-mono">
      <FormSearchTicket />
      {/* section */}
      <div className="mx-auto max-w-screen-lg py-6 grid grid-cols-4 gap-7 text-lg font-bold">
        <div className="border-b border-black flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          Quản lý đặt chỗ
        </div>
        <div className="border-b border-black flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          Cẩm nang du lịch
        </div>
        <div className="border-b border-black flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
          Khuyến mãi
        </div>
        <div className="border-b border-black flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Điểm đến yêu thích
        </div>
      </div>
      <div className="p-4 bg-[#F0EFED]">
        <div className="mx-auto max-w-screen-lg grid grid-cols-2 gap-7 text-white font-bold">
          <div className="relative">
            <img src={IgVe} className="h-64" />
            <div className="absolute bottom-4 right-4">
              <div className="text-3xl mb-2">vemaybay.vn</div>
              <button className="p-2 border border-white rounded hover:bg-white hover:text-black">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={IgUuDai} className="h-64" />
            <div className="absolute bottom-4 right-4 text-right">
              <div className="text-3xl mb-2">
                Ưu Đãi Nâng Hạng Dành Cho Khách Hàng Thân Thiết
              </div>
              <button className="p-2 border border-white rounded hover:bg-white hover:text-black">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end section */}
      <Flight />
    </div>
  );
}

export default App;
