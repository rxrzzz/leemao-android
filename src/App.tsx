import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { SectionFour } from "./features/landing/SectionFour";
import { SectionOne } from "./features/landing/SectionOne";
import { SectionThree } from "./features/landing/SectionThree";
import { SectionTwo } from "./features/landing/SectionTwo";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <div className="w-full lg:w-1/2">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
      <Footer />
    </div>
  );
}

export default App;
