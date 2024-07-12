import * as yup from "yup";
export const schema = yup.object({
  name: yup
    .string()
    .required("can't be blank")
    .min(3, "min 3 simbol")
    .matches(/^[a-zA-Z]+$/, "only char's are allowed"),
  cardNumber: yup
    .string()
    .required("can't be blank")
    .length(19, "CardNumber must contain 16 number")
    .matches(/^[0-9]+(?:\s[0-9]+)*$/, "CardNumber must contain 16 number"),
  month: yup
    .string()
    .required("can't be blank")
    .matches(/^\d+$/, "Must be only numbers")
    .length(2, "only two symbols"),
  year: yup
    .string()
    .required(" no blank")
    .matches(/^\d+$/, "only numbers")
    .length(2, "2 symbols"),
  cvc: yup
    .string()
    .required("can't be blank")
    .matches(/^\d+$/, "Must be only numbers")
    .length(3, "only three number"),
});
