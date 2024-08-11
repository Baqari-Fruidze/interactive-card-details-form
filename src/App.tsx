import { useForm, FormProvider } from "react-hook-form";
import Back from "./components/Back";
import Front from "./components/Front";
import Completed from "./components/Completed";
import Inputs from "./components/Inputs";
import { schema } from "./schema/Yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

function App() {
  const methods = useForm({ resolver: yupResolver(schema) });
  const [show, setShow] = useState<boolean>(false);
  return (
    <FormProvider {...methods}>
      <div className="cover flex items-center justify-center desktop:justify-normal">
        <div className="parent flex flex-col desktop:flex-row">
          <div className="topColoredCon w-[375px] h-[240px] bg-background-mobile pt-[32px] desktop:w-[483px] desktop:h-screen desktop:bg-background-desktop desktop:pt-[150px] desktop:mr-[349px]">
            <Back />
            <Front />
          </div>
          {show ? <Completed /> : <Inputs show={show} setShow={setShow} />}
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
