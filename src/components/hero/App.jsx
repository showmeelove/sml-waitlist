import { useState } from "react";

import Mail from "./mail";
import Modal from "./modal";
import Memoji from "./memoji";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="mx-auto container">
      <div>
        <h1 className="text-[22px] mt-[70px] leading-[25.78px] md:text-[32px] md:leading-[42.19px] md:mt-[30px] text-[#EEEEEE] lowercase font-medium text-center font-Eina01Bold">
          ShowMeeLove.
        </h1>
        <div className="mt-[64px] md:mt-[60px] rounded-[50px] max-w-[258px] mx-auto bg-lightblue">
          <p className="text-showblue font-figtree py-[13px] pr-[10px] text-[12px] leading-[14px] md:text-[14px] font-medium md:leading-[16.8pxpx] md:pl-[25px] md:pr-[20px] md:py-[11.5px] lowercase md:font-normal text-center">
            empowering african creators 🚀
          </p>
        </div>
        <div className="mx-auto max-w-[356px] mt-[40px]  md:mt-[30px] md:max-w-[901px] ">
          <h1 className="text-white text-[43px] leading-[49px]  md:text-[64px] md:leading-[70px] font-Eina01Bold lowercase text-center">
            Let your fans{" "}
            <span className="bg-clip-text text-transparent text-[43px] leading-[49px] md:text-[64px] md:leading-[70px] font-Eina01Bold lowercase bg-gradient-to-r from-[#1864FF] to-[#42AAFF]">
              Show you love
            </span>{" "}
            for your contents
          </h1>
          <p className="mx-auto md:block hidden mt-[28px] text-center lowercase font-medium font-figtree text-[20px] leading-[33px] text-showgray max-w-[792px] ">
            Got a devoted fanbase? join our waitlist to get early acess tools
            that will help you Unlock the power of direct support from your fans
            and deepen your connection with your audience by letting them tip
            you for your contents.
          </p>
          {/* small screen here texts */}
          <p className="md:hidden font-figtree mt-[27px] text-[16px] leading-[28px] font-medium text-showgray max-w-[364px] text-center ">
            Got a devoted fanbase? join our waitlist to get early access to
            tools that will Unlock the power of direct support from your fans
            and deepen your connection with your audience.
          </p>
        </div>
      </div>
      {/* Join waitlist form */}
      <Mail setModalOpen={setModalOpen} />
      {/* <Modal /> */}
      {modalOpen ? <Modal setModalOpen={() => setModalOpen(false)} /> : null}
      <Memoji />
      <div className="hero-overlay"></div>
    </div>
  );
};

export default App;
