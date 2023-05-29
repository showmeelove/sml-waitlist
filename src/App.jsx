import { useState } from "react";
import Mail from "./components/alpha/mail";
import Modal from "./components/alpha/modal";
import Memojis from "./components/alpha/memojis";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="mx-auto">
      <div className="hero-pattern"></div>
      <div className="gradient"></div>
      <div className="mx-auto">
        <h1 className="text-[#FEFEFE] pt-[33px] text-[22px] leading-[25.78px] md:pt-[43px] md:text-[32px] md:leading-[37.5px] lowercase font-medium text-center font-Eina01Bold">
          showmeelove.
        </h1>
        {/* <Memoji /> */}
        <Memojis />
        <div className="mx-auto max-w-[356px] mt-[33px] md:mt-[30px] md:max-w-[901px] ">
          <h1 className="text-[#fefefe] text-[43px] leading-[49px] md:text-[64px] md:leading-[70px] font-Eina01Bold lowercase text-center">
            let your fans{" "}
            <span className="bg-clip-text text-transparent text-[43px] leading-[49px] md:text-[64px] md:leading-[70px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              show you love
            </span>{" "}
            for your contents
          </h1>
          <div className="mx-auto max-w-[700px]">
            <p className="md:block hidden mt-[45px] text-center lowercase font-medium font-figtree text-[20px] leading-[33px] text-[#DEDEDE] max-w-[700px] ">
              got a devoted fanbase? <br /> join our waitlist to get early acess
              tools that will help you Unlock the power of direct support from
              your fans and deepen your connection with your audience by letting
              them tip you for your contents.
            </p>
          </div>

          {/* small screen here texts */}
          <div className="mx-auto max-w-[345px]">
            <p className="md:hidden font-figtree mx-[10px] mt-[29px] text-[16px] leading-[28px] font-medium text-showgray max-w-[364px] text-center ">
              got a devoted fanbase? <br /> join our waitlist to get early
              access to tools that will unlock the power of direct support from
              your fans and deepen your connection with your audience.
            </p>
          </div>
        </div>
      </div>
      {/* Join waitlist form */}
      <Mail setModalOpen={setModalOpen} />
      {/* <Modal /> */}
      {modalOpen ? <Modal setModalOpen={() => setModalOpen(false)} /> : null}
    </div>
  );
};

export default App;
