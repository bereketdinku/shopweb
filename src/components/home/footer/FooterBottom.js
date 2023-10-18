import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

function FooterBottom() {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lighttext duration-200 text-sm">
          <span className="text-md-r mr-[2px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
            Copyright 2023 | Ethio shopping | All Rights Reserved |
            <a>
              <span>Powered by Beki</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default FooterBottom;
