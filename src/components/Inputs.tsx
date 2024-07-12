import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

export default function Inputs({
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = () => {
    setShow(true);
  };

  return (
    <div className="parent px-[24px] pt-[70px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="nameCon flex flex-col relative">
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
            className={`rounded-[8px]   ${
              errors.name
                ? "border-[1px] border-[solid] border-[#FF5050]"
                : "border-[1px] border-[solid] border-[#DFDEE0]"
            } py-[10px] outline-none pl-[16px] mb-[20px] placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase`}
          />
          <span className=" absolute text-[12px] text-[#FF5050] font-medium bottom-[1px]">
            {errors.name?.message as ReactNode}
          </span>
        </div>
        <div className="cardNumber flex flex-col relative">
          <label
            htmlFor="cardNumber"
            className="labelCommonStyles text-[12px] text-[#21092F] font-medium tracking-[2px] uppercase mb-[9px] "
          >
            Card Number
          </label>
          <InputMask
            mask="9999 9999 9999 9999"
            type="text"
            id="cardNumber"
            {...register("cardNumber")}
            placeholder="e.g. 1234 5678 9123 0000"
            className={`rounded-[8px] ${
              errors.cardNumber
                ? "border-[1px] border-[solid] border-[#FF5050]"
                : "border-[1px] border-[solid] border-[#DFDEE0]"
            } py-[10px] outline-none pl-[16px] mb-[20px] placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase `}
          />
          <span className="absolute text-[12px] text-[#FF5050] font-medium bottom-[1px]">
            {errors.cardNumber?.message as ReactNode}
          </span>
        </div>
        <div className="flex items-center mb-[28px]">
          <div className="mr-[11px] w-[152px] relative ">
            <label className="text-[12px] text-[#21092F] font-medium tracking-[2px] uppercase ">
              Exp. Date (MM/YY)
            </label>
            <input
              type="text"
              {...register("month")}
              placeholder="MM"
              className={`  mr-[8px] text-center w-[72px] rounded-[8px] ${
                errors.month
                  ? "border-[1px] border-[solid] border-[#FF5050]"
                  : "border-[1px] border-[solid] border-[#DFDEE0]"
              } py-[10px] outline-none   placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase`}
            />
            <input
              type="text"
              {...register("year")}
              placeholder="YY"
              className={`mt-[9px] text-center w-[72px] rounded-[8px] ${
                errors.year
                  ? "border-[1px] border-[solid] border-[#FF5050]"
                  : "border-[1px] border-[solid] border-[#DFDEE0]"
              } py-[10px] outline-none   placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase  `}
            />
            <span className="absolute text-[12px] text-[#FF5050] font-medium bottom-[-20px] left-0">
              {errors.month?.message as ReactNode}
            </span>
            <span className="absolute text-[12px] text-[#FF5050] font-medium bottom-[-20px] right-0">
              {errors.year?.message as ReactNode}
            </span>
          </div>
          <div className=" flex flex-col relative ">
            <label
              htmlFor="cvc"
              className="text-[12px] text-[#21092F] font-medium tracking-[2px] uppercase mb-[9px]"
            >
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              {...register("cvc")}
              placeholder="e.g. 123"
              className={`text-left w-[166px] rounded-[8px] ${
                errors.cvc
                  ? "border-[1px] border-[solid] border-[#FF5050]"
                  : "border-[1px] border-[solid] border-[#DFDEE0]"
              } py-[10px] pl-[16px] outline-none   placeholder:opacity-25 placeholder:text-[18px] placeholder:font-medium placeholder:uppercase`}
            />
            <span className="absolute text-[12px] text-[#FF5050] font-medium bottom-[-20px] left-0">
              {errors.cvc?.message as ReactNode}
            </span>
          </div>
        </div>
        <button className="bg-[#21092F] rounded-[8px] border-none w-full py-[10px] text-[#fff] text-[18px] font-medium">
          Confirm
        </button>
      </form>
    </div>
  );
}
