import React from "react";
import logo from "/images/card-logo.svg";

export default function Front() {
  return (
    <div className="w-[285px] h-[156px] bg-card-front bg-no-repeat bg-[length:285px_156px] ml-[17px] mt-[-68px] pt-[17.6px] pr-[20.89px]  pl-[19px] ">
      <img src={logo} alt="" className="w-[54px] h-[30px] mb-[37px]" />
      <p className="mb-[17px]"> 0000 0000 0000 0000 </p>
      <div className="flex justify-between">
        <span>JANE APPLESEED</span>
        <span>00/00</span>
      </div>
    </div>
  );
}
