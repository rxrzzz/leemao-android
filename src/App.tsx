import "./App.css";
import { Navbar } from "./components/Navbar";
import { SectionOne } from "./features/landing/SectionOne";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <SectionOne />
    </div>
  );
}

export default App;
