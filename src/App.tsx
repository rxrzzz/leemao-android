import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SectionFour } from "./features/landing/SectionFour";
import { SectionOne } from "./features/landing/SectionOne";
import { SectionThree } from "./features/landing/SectionThree";
import { SectionTwo } from "./features/landing/SectionTwo";

function App() {
  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-full lg:w-7/12 mx-6">

          <Navbar />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </div>
        <div className="hidden lg:block w-5/12">
          <img src="/grid1.svg" alt="#" className="sticky top-0 right-0 w-full" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
