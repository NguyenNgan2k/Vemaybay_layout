import React, { useState } from "react";
import { VN, ChauA, ChauAu, HoaKy, ChauUc } from "../data";
import * as _ from "lodash";
import { useEffect } from "react";

function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(
    (props) => {
      ref.current = value;
    },
    [value]
  );

  return ref.current;
}

function ChooseAddress(props) {
  const [tab, setTab] = useState("VN");
  const [arr, setArr] = useState([]);
  const [open, setOpen] = useState(false);
  const preTab = usePrevious(tab);
  const { input } = props;

  useEffect(() => {
    if (tab && !_.isEqual(tab, preTab)) {
      const a =
        tab === "VN"
          ? setArr(VN)
          : tab === "CHAU_A"
          ? setArr(ChauA)
          : tab === "CHAU_AU"
          ? setArr(ChauAu)
          : tab === "HOA_KY"
          ? setArr(HoaKy)
          : tab === "CHAU_UC"
          ? setArr(ChauUc)
          : [];
    }
  }, [tab]);

  function handleOnClick(e) {
    input.onChange(e);
    setOpen(false);
  }

  return (
    <div className="relative" {...input}>
      <div
        className={
          "border-b border-[#f7941d] w-full lg:w-60cursor-pointer flex justify-between items-center"
        }
        onClick={() => setOpen(!open)}
      >
        <div>{input?.value ? input?.value : "Nhập thành phố/mã sân bay"}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-4 h-4 text-[#837A76]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {open && (
        <div className="w-[650px] h-auto p-6 border shadow-lg font-mono font-bold absolute top-8 z-10 bg-white rounded">
          <div className="flex border-b mb-2">
            <div className="mr-auto text-[#ffa300] mb-2">CHỌN ĐIỂM ĐI</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="5"
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer text-red-500 hover:text-black "
              onClick={() => setOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
              <li
                className={
                  tab === "VN"
                    ? "p-2 border-x border-t rounded-t cursor-pointer"
                    : "p-2 border-x border-t rounded-t cursor-pointer bg-[#ffa300] text-white"
                }
                onClick={() => setTab("VN")}
              >
                Việt Nam
              </li>
              <li
                className={
                  tab === "CHAU_A"
                    ? "p-2 border-x border-t rounded-t cursor-pointer"
                    : "p-2 border-x border-t rounded-t cursor-pointer bg-[#ffa300] text-white"
                }
                onClick={() => setTab("CHAU_A")}
              >
                Châu Á
              </li>
              <li
                className={
                  tab === "CHAU_AU"
                    ? "p-2 border-x border-t rounded-t cursor-pointer"
                    : "p-2 border-x border-t rounded-t cursor-pointer bg-[#ffa300] text-white"
                }
                onClick={() => setTab("CHAU_AU")}
              >
                Châu ÂU
              </li>
              <li
                className={
                  tab === "HOA_KY"
                    ? "p-2 border-x border-t rounded-t cursor-pointer"
                    : "p-2 border-x border-t rounded-t cursor-pointer bg-[#ffa300] text-white"
                }
                onClick={() => setTab("HOA_KY")}
              >
                Hoa kỳ-Canada
              </li>
              <li
                className={
                  tab === "CHAU_UC"
                    ? "p-2 border-x border-t rounded-t cursor-pointer"
                    : "p-2 border-x border-t rounded-t cursor-pointer bg-[#ffa300] text-white"
                }
                onClick={() => setTab("CHAU_UC")}
              >
                Châu Úc-Châu Phi
              </li>
            </ul>
          </div>
          <div className="border p-2">
            {(tab === "VN" || tab === "CHAU_AU" || tab === "HOA_KY") && (
              <ul className="grid grid-cols-3 gap-2">
                {arr &&
                  !!arr.length &&
                  arr.map((item, index) => {
                    if (typeof item != "string") return;
                    return (
                      <li
                        className="text-sm font-medium cursor-pointer hover:text-[#ffa300]"
                        key={index}
                        onClick={() => handleOnClick(item)}
                      >
                        {item}
                      </li>
                    );
                  })}
              </ul>
            )}
            {(tab === "CHAU_A" || tab === "CHAU_UC") && (
              <div>
                {arr &&
                  !!arr.length &&
                  arr.map((item, index) => {
                    if (typeof item != "object") return;
                    return (
                      <div key={index}>
                        {item.name}
                        <ul className="grid grid-cols-3 gap-2">
                          {item.children &&
                            !!item.children.length &&
                            item.children.map((it, index) => {
                              return (
                                <li
                                  className="text-sm font-medium cursor-pointer hover:text-[#ffa300]"
                                  key={index}
                                  onClick={() => handleOnClick(it)}
                                >
                                  {it}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChooseAddress;
