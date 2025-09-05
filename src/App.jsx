import { BodyMain } from "./sections/BodyMain";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";

export const App = () => {

  return (
    <div className="w-full flex flex-col">
     <Header/>
     <BodyMain/>
     <Footer/>
    </div>
  )
};
