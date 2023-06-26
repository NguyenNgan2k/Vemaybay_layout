import React from "react";
import * as _ from "lodash";

function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const RenderFileInput = ({ input, id }) => {
  const preInputValue = usePrevious(input?.value);
  React.useEffect(() => {
    if (input?.value && !_.isEqual(input?.value, preInputValue)) {
      input.onChange(input?.value);
    }
  }, [input?.value]);

  function handleOnClick() {
    input.onChange(id);
  }

  return (
    <>
      <div
        {...input}
        className={
          input.value === id
            ? "bg-[#FFA300] border-2 border-orange-400 rounded w-6 h-6 cursor-pointer"
            : "border-2 border-orange-400 rounded w-6 h-6 cursor-pointer"
        }
        onClick={handleOnClick}
      >
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
    </>
  );
};

export default RenderFileInput;
