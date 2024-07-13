import React from "react";
import logo from "/images/card-logo.svg";
import { useFormContext } from "react-hook-form";

export default function Front() {
  const { watch } = useFormContext();
  const name = watch("name") || "";
  const cardNumber = watch("cardNumber") || "";
  const month = watch("month") || "";
  const year = watch("year") || "";
  console.log(useFormContext());
  return (
    <div className="w-[285px] h-[156px] bg-card-front bg-no-repeat bg-[length:285px_156px] ml-[17px] mt-[-68px] pt-[17.6px] pr-[20.89px]  pl-[19px] ">
      <img src={logo} alt="" className="w-[54px] h-[30px] mb-[37px]" />
      <p className="mb-[17px] text-[18px] text-[#fff] font-medium tracking-[2.2px]">
        {cardNumber.length === 0 ? "0000 0000 0000 0000" : cardNumber}
      </p>
      <div className="nameAndDate flex justify-between items-center">
        <span className="text-[9px] text-[#fff] font-medium tracking-[1.286px] uppercase">
          {name.length === 0 ? "JANE APPLESEED" : name}
        </span>
        <span className="text-[9px] text-[#fff] font-medium tracking-[1.286px] uppercase">
          {month.length === 0 ? "00" : month} /{" "}
          {year.length === 0 ? "00" : year}
        </span>
      </div>
    </div>
  );
}
