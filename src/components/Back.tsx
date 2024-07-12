import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";

export default function Back() {
  const { watch } = useFormContext();
  const cvc = watch("cvc") || "";
  return (
    <div className="card  w-[286px] h-[157px] bg-card-back bg-no-repeat bg-center bg-[length:286px_157px]  flex items-center justify-end pr-[36px] ml-[73px]">
      <span className="text-[9px] font-medium text-[#fff] uppercase">
        {cvc.length === 0 ? "000" : cvc}
      </span>
    </div>
  );
}
