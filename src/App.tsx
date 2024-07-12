import { useForm, FormProvider, useFormContext } from "react-hook-form";
import mobileBackkground from "/images/bg-main-mobile.png";
import Back from "./components/Back";
import Front from "./components/Front";
import Completed from "./components/Completed";
import Inputs from "./components/Inputs";

export const Context = createContext({});

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="cover flex items-center justify-center">
      <div className="parent flex flex-col ">
        <div className="topColoredCon   w-[375px] h-[240px] bg-background-mobile pt-[32px]">
          <Back />
          <Front />
        </div>
        {/* <Completed /> */}
        <Inputs />
      </div>
    </div>
  );
}

export default App;
