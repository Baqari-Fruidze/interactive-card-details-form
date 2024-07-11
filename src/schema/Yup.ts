import * as yup from "yup";
export const schema = yup.object({
  name: yup.string().required("motxovnadia").min(3, "min 3 simbol"),
});
