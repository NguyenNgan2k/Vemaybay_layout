import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { range } from "lodash";
import * as _ from "lodash";
import { stringToDate } from "../utils";
import moment from "moment";
import { connect } from "react-redux";

const monthVns = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

const dayVns = ["Cn", "T2", "T3", "T4", "T5", "T6", "T7"];

function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
function RenderInputDate(props) {
  const {
    input,
    className,
    onCalendarOpen,
    onCalendarClose,
    disabled,
    meta,
    minDate,
    maxDate,
  } = props;

  let vnf_regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  const [startDate, setStartDate] = useState(new Date());
  const preInputValue = usePrevious(input?.value);

  const years = range(1950, new Date().getFullYear() + 40, 1);
  const locale = {
    localize: {
      day: (n) => dayVns[n],
      month: (n) => monthVns[n],
    },
    formatLong: {
      date: () => "mm/dd/yyyy",
    },
  };

  const months = monthVns;

  useEffect(() => {
    if (
      input?.value &&
      vnf_regex.test(input?.value) &&
      !_.isEqual(input?.value, preInputValue)
    ) {
      setStartDate(stringToDate(input?.value, "dmy"));
      input.onChange(input?.value);
    }
  }, [input?.value]);

  const ExampleCustomInput = forwardRef(({ onClick }, ref) => (
    <div
      className="border-b border-[#f7941d] w-full lg:w-60 cursor-pointer  flex justify-between items-center"
      onClick={!disabled ? onClick : () => {}}
    >
      <div className={disabled ? "text-[#837a76]" : ""}>{input?.value}</div>
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
  ));

  function handleCalendarOpen() {
    onCalendarOpen && onCalendarOpen();
  }
  function handleCalendarClose() {
    onCalendarClose && onCalendarClose();
  }

  return (
    <>
      <div>
        <DatePicker
          selected={startDate}
          minDate={minDate}
          maxDate={maxDate}
          locale={locale}
          onChange={(date) => input.onChange(moment(date).format("DD/MM/YYYY"))}
          customInput={<ExampleCustomInput />}
          onCalendarOpen={handleCalendarOpen}
          onCalendarClose={handleCalendarClose}
          disabled={disabled}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="btn px-2 py-0"
              >
                {"<"}
              </button>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="btn px-2 py-0"
              >
                {">"}
              </button>
            </div>
          )}
          className="w-full"
        />
      </div>
    </>
  );
}

export default RenderInputDate;
