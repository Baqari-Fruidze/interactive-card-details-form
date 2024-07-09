import React from "react";
import completed from "/images/icon-complete.svg";
export default function Completed() {
  return (
    <div className=" flex flex-col items-center px-[24px]">
      <img
        src={completed}
        alt=""
        className="mt-[70px] mb-[35px] w-[80px] h-[80px]"
      />
      <h1 className="text-[28px] text-[#21092F] font-medium tracking-[3.422px] mt-[16px]">
        THANK YOU!
      </h1>
      <p className="text-[18px] text-[#8F8694] font-medium mb-[48px]">
        We’ve added your card details
      </p>
      <button className="bg-[#21092F] rounded-[8px] w-full py-[15px] text-[18px] text-[#fff] font-medium">
        Continue
      </button>
    </div>
  );
}
