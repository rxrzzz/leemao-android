import React from "react";
import { Navbar } from "../../components/Navbar";
import { SectionOne } from "./SectionOne";
import { Footer } from "../../components/Footer";

export const Landing = () => {
  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-full lg:w-7/12 mx-6 md:mx-12 lg:mx-14 xl:mx-28">
          <Navbar />
          <SectionOne />
        </div>
        <div className="hidden lg:block w-5/12 h-screen  sticky top-0 right-0 bg-[#16121a]">
          <img src="/grid1.png" alt="#" className="  h-screen object-cover" />
        </div>
      </div>
      <footer className="mx-6 md:mx-12 lg:mx-14 xl:mx-28">
        <Footer />
      </footer>
    </div>
  );
}

export default Landing;