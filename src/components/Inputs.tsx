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
          <label htmlFor="name">Cardholder Name</label>
          <input type="text" id="name" />
        </div>
        <div className="cardNumber flex flex-col">
          <label htmlFor="cardNumber"> Card Number</label>
          <input type="text" id="cardNumber" />
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
