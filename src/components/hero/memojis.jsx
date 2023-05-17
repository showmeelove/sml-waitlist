// /* eslint-disable react/no-unknown-property */
// import slidemd from "../../assets/images/slide-desk.png";
// import slidesm from "../../assets/images/slide-md.png";

// const memoji = () => {
//   return (
//     <marquee>
//       <div className="mt-[30px]">
//         <div className="md:block hidden">
//           <img src={slidemd} alt="sliding memojis" />
//         </div>
//         {/* mobile screen */}
//         {/* <div className="md:hidden sm:block">
//           <img src={slidesm} alt="sliding memojis" className="" />
//         </div> */}
//       </div>
//     </marquee>
//   );
// };

// export default memoji;

import icon1 from "../../assets/images/heroIcon11.png";
import icon2 from "../../assets/images/heroIcon22.png";
import icon3 from "../../assets/images/heroIcon3.png";
import icon4 from "../../assets/images/heroIcon4.png";
import icon5 from "../../assets/images/heroIcon5.png";
import icon6 from "../../assets/images/heroIcon6.png";

const memoji = () => {
  // eslint-disable-next-line react/prop-types
  const ButtonWithImg = ({ type, text, children, icon }) => {
    return (
      <button
        type={type}
        className="w-[220px] py-[0.4rem] px-[0.5rem] bg-transparent border-[1px] border-[#A3A3A3] text-white text-center rounded-[50px] flex items-center  gap-x-5"
      >
        {icon}
        {children}
        {text}
      </button>
    );
  };

  return (
    <marquee direction="left">
      <div className="mt-[30px] flex gap-x-[2rem] z-40 md:mt-[37px] hero-animation">
        <ButtonWithImg text={"developers"}>
          <div className="w-[50px]">
            <img src={icon1} alt="creators" className="w-[100%]" />
          </div>
        </ButtonWithImg>
        <ButtonWithImg text={"writers"}>
          <div className="w-[50px]">
            <img src={icon2} alt="/" className="w-[100%]" />
          </div>
        </ButtonWithImg>
        <ButtonWithImg text={"podcasters"}>
          <div className="w-[50px]">
            <img src={icon3} alt="creators" className="w-[100%]" />
          </div>
        </ButtonWithImg>
        <ButtonWithImg text={"comedians"}>
          <div className="w-[50px]">
            <img src={icon4} alt="creators" className="w-[100%]" />
          </div>
        </ButtonWithImg>
        <ButtonWithImg text={"community"}>
          <div className="w-[50px]">
            <img src={icon5} alt="creators" className="w-[100%]" />
          </div>
        </ButtonWithImg>
        <ButtonWithImg text={"musicians"}>
          <div className="w-[50px]">
            <img src={icon6} alt="creators" className="w-[100%]" />
          </div>
        </ButtonWithImg>
      </div>
    </marquee>
  );
};

export default memoji;