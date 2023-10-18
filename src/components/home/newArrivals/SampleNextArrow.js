import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:lg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[355] right-2"
    >
      <span className="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
}

export default SampleNextArrow;
