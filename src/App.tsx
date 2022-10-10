import "./App.css";
import { Navbar } from "./components/Navbar";
import { SectionOne } from "./features/landing/SectionOne";
import { SectionTwo } from "./features/landing/SectionTwo";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <div className="w-full lg:w-1/2">
      <SectionOne />
      <SectionTwo />
      </div>
    </div>
  );
}

export default App;
