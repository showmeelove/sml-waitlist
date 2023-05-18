/* eslint-disable react/no-unknown-property */
import icon1 from "../../assets/images/heroIcon11.png";
import icon2 from "../../assets/images/heroIcon22.png";
import icon3 from "../../assets/images/heroIcon3.png";
import icon4 from "../../assets/images/heroIcon4.png";
import icon5 from "../../assets/images/heroIcon5.png";
import icon6 from "../../assets/images/heroIcon6.png";
import icon7 from "../../assets/images/heroIcon7.png";
// import slidemd from "../../assets/images/slide-md.png";
// import slidelg from "../../assets/images/slide-desk.png";

const memoji = () => {
  // eslint-disable-next-line react/prop-types
  const ButtonWithImg = ({ type, text, children, icon }) => {
    return (
      <button
        type={type}
        className="w-[180px] py-[0.12rem] px-[1px] bg-transparent border-[1px] border-[#A3A3A3] text-[16px] text-[#fefefe] text-center rounded-[50px] flex items-center md:gap-x-[30px] gap-x-[20px]"
      >
        {icon}
        {children}
        {text}
      </button>
    );
  };

  return (
    <>
      <div className="mt-[35px] mx-3 px-4 flex gap-x-[2rem] z-40 md:mt-[37px] hero-animation overflow-hidden">
        <div className="animate-alternate">
          <ButtonWithImg text="developers">
            <div className="w-[50px]">
              <img src={icon1} alt="creators" className="w-[100%]" />
            </div>
          </ButtonWithImg>
        </div>
        <div className="animate-alternate">
          <ButtonWithImg text="writers">
            <div className="w-[50px]">
              <img src={icon2} alt="/" className="w-[100%]" />
            </div>
          </ButtonWithImg>
        </div>
        <div className="animate-alternate">
          <ButtonWithImg text="podcasters">
            <div className="w-[50px]">
              <img src={icon3} alt="creators" className="w-[100%]" />
            </div>
          </ButtonWithImg>
        </div>
        <div className="animate-alternate">
          <ButtonWithImg text="comedians">
            <div className="w-[50px]">
              <img src={icon4} alt="creators" className="w-[100%]" />
            </div>
          </ButtonWithImg>
        </div>
        <div className="animate-alternate">
          <ButtonWithImg text="community">
            <div className="w-[50px]">
              <img src={icon5} alt="creators" className="w-[100%]" />
            </div>
          </ButtonWithImg>
        </div>
        <div className="animate-alternate">
          <ButtonWithImg text="musicians">
            <div className="w-[50px]">
              <img src={icon6} alt="creators" className="w-[100%]" />
            </div>
          </ButtonWithImg>
        </div>
        <div className="animate-alternate">
          <ButtonWithImg text="creators">
            <div className="w-[50px]">
              <img src={icon7} alt="creators" className="w-[100%]" />
            </div>
          </ButtonWithImg>
        </div>
      </div>
      {/* 
      <div className="animate-alternate">
        <img src={slidelg} alt="scrolling animation" />
      </div> */}
    </>
  );
};

export default memoji;
