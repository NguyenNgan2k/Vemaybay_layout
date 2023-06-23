import { useState } from "react";
function ChooseAddress() {
  return (
    <div className="w-[500px] h-[500px] p-6 border shadow-md font-mono font-bold">
      <div className="flex border-b mb-2">
        <div className="mr-auto text-[#ffa300] mb-2">CHỌN ĐIỂM ĐI</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="5"
          stroke="currentColor"
          class="w-5 h-5 text-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <input
        className="border w-full rounded h-8 p-2"
        placeholder="Nhập thành phố / mã sân bay"
      />
      <div>
        <ul className="flex text-sm mt-2">
          <li>Việt Nam</li>
          <li>Châu Á</li>
          <li>Châu ÂU</li>
          <li>Hoa kỳ-Canada</li>
          <li>Châu Úc-Châu Phi</li>
        </ul>
      </div>
    </div>
  );
}

export default ChooseAddress;
