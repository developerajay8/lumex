import React from "react";

export default function header() {
  return (
    <div className="bg-black xl:px-0 px-[20px]">
    <div className="max-w-[1440px] mx-auto bg-[black] sm:py-[20px] py-[12px]">
      <div className="max-w-[1084px] mx-auto flex items-center justify-between">
        <img src="/Asset 5-100 1 (1).png" className="sm:block hidden" alt="" />
        <img src="/Asset 5-100 1.png" className="sm:hidden block" alt="" />
        <div className="flex gap-4">
          <button className="bg-[#FF371A] rounded-[6px] w-[43px] h-[41px] flex items-center justify-center text-white text-lg">
            <img src="/Vector (1).png" alt="" />
          </button>
          <button className="px-6 py-2 font-lato bg-[#FF371A] text-white rounded-lg hidden sm:block hover:bg-opacity-90 transition-colors">
            Arrange a Call Back
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
