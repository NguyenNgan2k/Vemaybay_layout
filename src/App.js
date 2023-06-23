import { useState } from "react";
import Airplane from "./assets/img/icon_flight.png";
import Convert from "./assets/img/icon-convert.png";
import ChooseAddress from "./layout/ChooseAddress";
function App() {
  const [check, setCheck] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [baby, setBaby] = useState(0);

  function handleChangeCheck(value) {
    if (check === value) return;
    setCheck(value);
  }

  return (
    <>
      <div class="w-full h-96 bg-[#FFA300] py-12">
        <div className="p-5 bg-white mx-auto max-w-screen-lg text-base font-mono font-bold">
          <div className="p-2 h-16 mb-4 w-40 flex items-center border-b-2 border-[#f7941d]">
            <img src={Airplane} alt="" className="h-8 w-9 mr-2" />
            <span className="text-[#FFA300]">Vé máy bay</span>
          </div>

          <div className="flex mb-4">
            <div className="flex mr-auto">
              <div className="py-2 pr-5 flex">
                <div
                  className={
                    check === 1
                      ? "bg-[#FFA300] border-2 border-orange-400 rounded w-6 h-6"
                      : "border-2 border-orange-400 rounded w-6 h-6"
                  }
                  onClick={() => handleChangeCheck(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="5"
                    stroke="currentColor"
                    class="w-4 h-4 text-white m-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>

                <span className="pl-2">Một chiều</span>
              </div>
              <div className="py-2 pr-5 flex">
                <div
                  className={
                    check === 2
                      ? "bg-[#FFA300] border-2 border-orange-400 rounded w-6 h-6"
                      : "border-2 border-orange-400 rounded w-6 h-6"
                  }
                  onClick={() => handleChangeCheck(2)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="5"
                    stroke="currentColor"
                    class="w-4 h-4 text-white m-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span className="pl-2">Khứ hồi</span>
              </div>
              <div className="py-2 pr-5 flex">
                <div
                  className={
                    check === 3
                      ? "bg-[#FFA300] border-2 border-orange-400 rounded w-6 h-6"
                      : "border-2 border-orange-400 rounded w-6 h-6"
                  }
                  onClick={() => handleChangeCheck(3)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="5"
                    stroke="currentColor"
                    class="w-4 h-4 text-white m-auto"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span className="pl-2">Nhiều chặng</span>
              </div>
            </div>
            <div className="py-2 flex">
              <div
                className={
                  check === 4
                    ? "bg-[#FFA300] border-2 border-orange-400 rounded w-6 h-6"
                    : "border-2 border-orange-400 rounded w-6 h-6"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="5"
                  stroke="currentColor"
                  class="w-4 h-4 text-white m-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="pl-2">Tìm vé cả tháng</span>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-2/3 mr-10">
              <div className="flex justify-between mb-4">
                <div className="w-56">
                  <div className="text-[#837a76] font-medium">Điểm đi</div>
                  <div className="border-b border-[#f7941d]">
                    <div>Nhập thành phố/mã sân bay</div>
                  </div>
                </div>
                <img src={Convert} className="h-2 self-end mb-2" />
                <div className="w-56">
                  <div className="text-[#837a76] font-medium">Điểm đến</div>
                  <div className="border-b border-[#f7941d]">
                    <div>Nhập thành phố/mã sân bay</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="w-56">
                  <div className="text-[#837a76] font-medium">Ngày đi</div>
                  <div className="border-b border-[#f7941d]">
                    <div>23/6/2023</div>
                  </div>
                </div>
                <img src={Convert} className="h-2 self-end mb-2" />
                <div className="w-56">
                  <div className="text-[#837a76] font-medium">Ngày về</div>
                  <div className="border-b border-[#f7941d]">
                    <div>23/6/2023</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 grid grid-cols-3 gap-4">
              <div>
                <div className="text-center">Người lớn</div>
                <div className="flex justify-between items-center border p-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 border-2 border-orange-400 rounded"
                    onClick={() => {
                      if (adult > 1) setAdult(adult - 1);
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span>{adult}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 border-2 border-orange-400 rounded"
                    onClick={() => setAdult(adult + 1)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-center">Trẻ em</div>
                <div className="flex justify-between items-center border p-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 border-2 border-orange-400 rounded"
                    onClick={() => {
                      if (children > 0) setChildren(children - 1);
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span>{children}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 border-2 border-orange-400 rounded"
                    onClick={() => setChildren(children + 1)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-center">Em bé</div>
                <div className="flex justify-between items-center border p-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 border-2 border-orange-400 rounded"
                    onClick={() => {
                      if (baby > 0) setBaby(baby - 1);
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                  <span>{baby}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 border-2 border-orange-400 rounded"
                    onClick={() => setBaby(baby + 1)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </div>
              </div>
              <button className="col-span-3 p-3 bg-[#ff6d00] text-white font-medium rounded flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="5"
                  stroke="currentColor"
                  class="w-4 h-4 self-center"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <span> TÌM KIẾM CHUYẾN BAY</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ChooseAddress />
    </>
  );
}

export default App;
