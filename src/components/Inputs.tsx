import React from "react";
import { useForm } from "react-hook-form";

export default function Inputs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="parent px-[24px] pt-[70px]">
      <form>
        <div className="nameCon flex flex-col">
          <label
            htmlFor="name"
            className="labelCommonStyles text-[12px] text-[#21092F] font-medium tracking-[2px] uppercase mb-[9px]"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Jane Appleseed"
            className="rounded-[8px] border-[1px] border-[solid] border-[#DFDEE0] py-[10px] outline-none pl-[16px] mb-[20px] placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase"
          />
        </div>
        <div className="cardNumber flex flex-col">
          <label
            htmlFor="cardNumber"
            className="labelCommonStyles text-[12px] text-[#21092F] font-medium tracking-[2px] uppercase mb-[9px] "
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            className="rounded-[8px] border-[1px] border-[solid] border-[#DFDEE0] py-[10px] outline-none pl-[16px] mb-[20px] placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase"
          />
        </div>
        <div>
          <div>
            <label>Exp. Date (MM/YY)</label>
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" />
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}
