import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";

export default function Back() {
  const { watch } = useFormContext();
  const cvc = watch("cvc") || "";
  return (
    <div className="card  w-[286px] h-[157px] bg-card-back bg-no-repeat bg-center bg-[length:286px_157px]  flex items-center justify-end pr-[36px] ml-[73px] desktop:w-[447px] desktop:h-[245px] desktop:bg-[length:447px_245px] desktop:pr-[50px] desktop:ml-[258px] ">
      <span className="text-[9px] font-medium text-[#fff] uppercase tracking-[1.286px] desktop:text-[14px] desktop:tracking-[2px]">
        {cvc.length === 0 ? "000" : cvc}
      </span>
    </div>
  );
}
