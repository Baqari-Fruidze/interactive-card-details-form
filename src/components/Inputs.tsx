import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/Yup";

export default function Inputs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="parent px-[24px] pt-[70px]">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("name")}
            placeholder="e.g. Jane Appleseed"
            className="rounded-[8px] border-[1px] border-[solid] border-[#DFDEE0] py-[10px] outline-none pl-[16px] mb-[20px] placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase"
          />
          <span>{errors.name?.message}</span>
        </div>
        <div className="cardNumber flex flex-col">
          <label
            htmlFor="cardNumber"
            className="labelCommonStyles text-[12px] text-[#21092F] font-medium tracking-[2px] uppercase mb-[9px] "
          >
            Card Number
          </label>
          <input
            type="number"
            id="cardNumber"
            {...register("cardNumber")}
            placeholder="e.g. 1234 5678 9123 0000"
            className="rounded-[8px] border-[1px] border-[solid] border-[#DFDEE0] py-[10px] outline-none pl-[16px] mb-[20px] placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase"
          />
        </div>
        <div className="flex items-center mb-[28px]">
          <div className="mr-[11px] w-[152px] ">
            <label className="text-[12px] text-[#21092F] font-medium tracking-[2px] uppercase ">
              Exp. Date (MM/YY)
            </label>
            <input
              type="number"
              {...register("month")}
              placeholder="MM"
              className=" mr-[8px] text-center w-[72px] rounded-[8px] border-[1px] border-[solid] border-[#DFDEE0] py-[10px] outline-none   placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase"
            />
            <input
              type="number"
              {...register("year")}
              placeholder="YY"
              className=" mt-[9px] text-center w-[72px] rounded-[8px] border-[1px] border-[solid] border-[#DFDEE0] py-[10px] outline-none   placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase"
            />
          </div>
          <div className=" flex flex-col ">
            <label
              htmlFor="cvc"
              className="text-[12px] text-[#21092F] font-medium tracking-[2px] uppercase mb-[9px]"
            >
              CVC
            </label>
            <input
              type="number"
              id="cvc"
              {...register("cvc")}
              placeholder="e.g. 123"
              className="text-left w-[166px] rounded-[8px] border-[1px] border-[solid] border-[#DFDEE0] py-[10px] pl-[16px] outline-none   placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase"
            />
          </div>
        </div>
        <button className="bg-[#21092F] rounded-[8px] border-none w-full py-[10px] text-[#fff] text-[18px] font-medium">
          Confirm
        </button>
      </form>
    </div>
  );
}
