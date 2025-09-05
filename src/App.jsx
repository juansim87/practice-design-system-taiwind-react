import { BodyMain } from "./components/sections/BodyMain";
import { Header } from "./components/sections/Header";

export const App = () => {

  return (
    <div className="w-full flex flex-col">
     <Header/>
     <BodyMain/>
    </div>
  )
};
