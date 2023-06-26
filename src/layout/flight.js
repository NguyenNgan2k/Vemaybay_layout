import { BsFillAirplaneFill, BsClock } from "react-icons/bs";
function Flight() {
  return (
    <div className="mx-auto max-w-screen-lg pt-6">
      {/* steps */}
      <div className="grid grid-cols-3 gap-2 font-bold">
        <div className="flex bg-[#ffa300] px-4 py-2 text-white">
          <div className="px-2 border-2 border-white rounded-full mr-2">1</div>
          <span>Chọn chuyến bay</span>
        </div>
        <div className="flex bg-[#ddd] px-4 py-2 text-white">
          <div className="px-2 border-2 border-white rounded-full mr-2">2</div>
          <span>Đặt chỗ</span>
        </div>
        <div className="flex bg-[#ddd] px-4 py-2 text-white">
          <div className="px-2 border-2 border-white rounded-full mr-2">3</div>
          <span>Thanh toán</span>
        </div>
      </div>
      {/* end steps */}
      <div className="grid grid-cols-3 gap-2">
        <div className="">
          {/* Sắp xếp chuyến bay */}
          <div className="border shadow-lg rounded my-2">
            <div className="flex bg-[#ffa300] p-3 rounded-t">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
              <span className="text-white font-bold">SẮP XẾP CHUYẾN BAY</span>
            </div>
            <div className="flex p-3 border-b">
              <div className="bg-white border-2 border-orange-400 rounded-full w-6 h-6 cursor-pointer mr-2">
                <div className="bg-[#FFA300] border-2 border-orange-400 rounded-full w-3 h-3 cursor-pointer mx-auto mt-1"></div>
              </div>
              <span>Giá chuyến bay</span>
            </div>
            <div className="flex p-3 border-b">
              <div className="bg-white border-2 border-orange-400 rounded-full w-6 h-6 cursor-pointer mr-2"></div>
              <span>Giờ khởi hành</span>
            </div>
            <div className="flex p-3 border-b">
              <div className="bg-white border-2 border-orange-400 rounded-full w-6 h-6 cursor-pointer mr-2"></div>
              <span>Giờ hạ cánh</span>
            </div>
            <div className="flex p-3 border-b">
              <div className="bg-white border-2 border-orange-400 rounded-full w-6 h-6 cursor-pointer mr-2"></div>
              <span>Thời gian bay</span>
            </div>
            <div className="flex p-3 border-b">
              <div className="bg-white border-2 border-orange-400 rounded-full w-6 h-6 cursor-pointer mr-2"></div>
              <span>Hàng không</span>
            </div>
          </div>

          {/* Chế độ hiển thị theo */}
          <div className="border shadow-lg rounded my-2">
            <div className="flex bg-[#ffa300] p-3 rounded-t">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-white font-bold">CHẾ ĐỘ HIỂN THỊ THEO</span>
            </div>
            <div className="flex p-3 border-b">
              <div className="bg-[#FFA300] border-2 border-orange-400 rounded w-6 h-6 cursor-pointer mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="5"
                  stroke="currentColor"
                  className="text-white m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span>Giá vé cơ bản cho người lớn</span>
            </div>
            <div className="flex p-3 border-b">
              <div className="border-2 border-orange-400 rounded w-6 h-6 cursor-pointer mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="5"
                  stroke="currentColor"
                  className="text-white m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span>Giá vé bao gồm thuế và phí</span>
            </div>
          </div>

          {/*Lọc chuyến bay */}
          <div className="border shadow-lg rounded my-2">
            <div className="flex bg-[#ffa300] p-3 rounded-t">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
              <span className="text-white font-bold">LỌC CHUYẾN BAY</span>
            </div>
            <div className="bg-[#f7f7f7] p-3 flex justify-between items-center">
              Chọn hãng hàng không
              <BsFillAirplaneFill color="#63adb3" className="-rotate-90" />
            </div>
            <div className="flex p-3 border-b">
              <div className="bg-[#FFA300] border-2 border-orange-400 rounded w-6 h-6 cursor-pointer mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="5"
                  stroke="currentColor"
                  className="text-white m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span>Tất cả các hãng</span>
            </div>
            <div className="flex p-3 border-b justify-between">
              <div className="flex">
                <div className="border-2 border-orange-400 rounded w-6 h-6 cursor-pointer mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="text-white m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Bamboo Airways</span>
              </div>
              <div className="text-[#FFA300]">1,608k</div>
            </div>
            <div className="flex p-3 border-b justify-between">
              <div className="flex">
                <div className="border-2 border-orange-400 rounded w-6 h-6 cursor-pointer mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="text-white m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Vietjet Air</span>
              </div>
              <div className="text-[#FFA300]">1,608k</div>
            </div>
            <div className="flex p-3 border-b justify-between">
              <div className="flex">
                <div className="border-2 border-orange-400 rounded w-6 h-6 cursor-pointer mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="text-white m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>Pacific Airline</span>
              </div>
              <div className="text-[#FFA300]">1,608k</div>
            </div>
            <div className="flex p-3 border-b justify-between">
              <div className="flex">
                <div className="border-2 border-orange-400 rounded w-6 h-6 cursor-pointer mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="text-white m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span>VietNam Airways</span>
              </div>
              <div className="text-[#FFA300]">1,608k</div>
            </div>
            <div className="bg-[#f7f7f7] p-3 flex justify-between items-center">
              Chọn theo giờ
              <BsClock color="#63adb3" />
            </div>
          </div>

          {/*Tìm kiếm chuyến bay */}
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}

export default Flight;
