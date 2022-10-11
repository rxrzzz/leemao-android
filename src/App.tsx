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
        <div className="w-full lg:w-7/12 mx-6 md:mx-12 lg:mx-14 xl:mx-28">
          <Navbar />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </div>
        <div className="hidden lg:block w-5/12 h-screen  sticky top-0 right-0">
          <img src="/grid1.png" alt="#" className="  h-screen object-cover" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
