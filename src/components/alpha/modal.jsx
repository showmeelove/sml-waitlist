/* eslint-disable react/prop-types */
import icon1 from "../../assets/images/modalimg1.png";
import icon2 from "../../assets/images/modalimg2.png";
import icon3 from "../../assets/images/modalimg3.png";
import icon4 from "../../assets/images/modalimg4.png";

const Modal = ({ setModalOpen }) => {
  return (
    <div className="z-40 text-white bg-[#001534]/50 backdrop-blur-sm fixed top-0 right-0 left-0 h-[100%] w-[100%] overflow-hidden flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-[390px] h-[508px] md:max-w-[582px] bg-[#001534] md:h-[631px] drop-shadow-xl py-4 px-[2rem] rounded-[20px] md:rounded-[30px]">
        <div className="flex items-center justify-center ">
          <div className="sm:w-[85.96px] w-[65px]">
            <img src={icon1} className="" alt="" />
          </div>
          <div className="sm:w-[85.96px] w-[65px] ml-[-1rem]">
            <img src={icon2} className="" alt="" />
          </div>
          <div className="sm:w-[85.96px] w-[65px] ml-[-1rem]">
            <img src={icon3} className="" alt="" />
          </div>
          <div className="sm:w-[85.96px] w-[65px] ml-[-1rem]">
            <img src={icon4} className="" alt="" />
          </div>
        </div>
        <h2 className="font-Eina01Bold text-[26px] leading-[30.47px] max-w-[294px] mt-[34px]  md:max-w-[407px] md:mt-[48.43px] md:text-[32px] md:leading-[37.5px] text-center">
          yo! you have been added to our waitlist!
        </h2>
        <p className="text-[#EEEEEE] text-[15px] leading-[25px] max-w-[317px] mt-[30px] md:mt-[42px] md:max-w-[501px] font-figtree font-medium md:text-[20px] md:leading-[33px] text-center ">
          we will send you an email as soon as we ready launch. do well to
          invite other creators to join our waitlist so they can get early
          access when we launch.
        </p>
        {/* <Button text={"got it! thank you 🚀"} /> */}
        <button
          className="w-[340px] mt-[40px] py-[10px] md:w-[90%] md:py-[1.2rem] md:px-[0.5rem] font-figtree text-[17px] leading-[38px] bg-white text-[#001534] md:mt-[83px] md:text-[20px] md:leading-[33px] text-center rounded-[50px] mx-auto"
          onClick={setModalOpen}
        >
          got it! thank you 🚀
        </button>
      </div>
    </div>
  );
};

export default Modal;
