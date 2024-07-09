import { useForm } from "react-hook-form";
import { createContext, useState } from "react";
import mobileBackkground from "/images/bg-main-mobile.png";
import Back from "./components/Back";
import Front from "./components/Front";
import Completed from "./components/Completed";

const Context = createContext(0);

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [a, seta] = useState(1);
  return (
    <Context.Provider value={a}>
      <div className="cover flex items-center justify-center">
        <div className="parent  ">
          <div className="topColoredCon   w-[375px] h-[240px] bg-background-mobile pt-[32px]">
            <Back />
            <Front />
          </div>
          <Completed />
          <div></div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
