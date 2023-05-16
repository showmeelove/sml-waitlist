/* eslint-disable react/no-unknown-property */
import icon1 from "../../assets/images/heroIcon11.png";
import icon2 from "../../assets/images/heroIcon22.png";
import icon3 from "../../assets/images/heroIcon3.png";
import icon4 from "../../assets/images/heroIcon4.png";
import icon5 from "../../assets/images/heroIcon5.png";
import icon6 from "../../assets/images/heroIcon6.png";
import icon7 from "../../assets/images/heroIcon7.png";

const memoji = () => {
  return (
    <>
      <marquee
        className={`idden`}
        behavior="alternte"
        scrolldelay="0.1"
        scrollamount="17"
        direction="left"
      >
        <div className="buttonbg container mt-[35px] flex items-center space-x-[25px]">
          <div className="flex items-center space-x-[10px] outline-[#EEEEEE] outline outline-[1px] max-w-[200px] cursor-pointer rounded-[100px]">
            <img src={icon1} alt="developer memoji" className="p-[6px]" />
            <p className="text-white font-figtree font-medium text-[18px] leading-[21.6px] pr-[20px]">
              developers
            </p>
          </div>

          <div className="flex items-center space-x-[10px] outline-[#EEEEEE] outline outline-[1px]  max-w-[200px] cursor-pointer rounded-[100px]">
            <img src={icon2} alt="writer memoji" className="p-[6px]" />
            <p className="text-white font-figtree font-medium text-[18px] leading-[21.6px] pr-[20px]">
              writers
            </p>
          </div>

          <div className="flex items-center space-x-[10px] outline-[#EEEEEE] outline outline-[1px] max-w-[200px] cursor-pointer rounded-[100px]">
            <img src={icon3} alt="podcasters memoji" className="p-[6px]" />
            <p className="text-white font-figtree font-medium text-[18px] leading-[21.6px] pr-[20px]">
              podcasters
            </p>
          </div>

          <div className="flex items-center space-x-[10px] outline-[#EEEEEE] outline outline-[1px] max-w-[200px] cursor-pointer rounded-[100px]">
            <img src={icon4} alt="comedians memoji" className="p-[6px]" />
            <p className="text-white font-figtree font-medium text-[18px] leading-[21.6px] pr-[20px]">
              comedians
            </p>
          </div>

          <div className="flex items-center space-x-[10px] outline-[#EEEEEE] outline outline-[1px] max-w-[200px] cursor-pointer rounded-[100px]">
            <img src={icon5} alt="community memoji" className="p-[6px]" />
            <p className="text-white font-figtree font-medium text-[18px] leading-[21.6px] pr-[20px]">
              community
            </p>
          </div>
          <div className="flex items-center space-x-[10px] outline-[#EEEEEE] outline outline-[1px] max-w-[200px] cursor-pointer rounded-[100px]">
            <img src={icon6} alt="community memoji" className="p-[6px]" />
            <p className="text-white font-figtree font-medium text-[18px] leading-[21.6px] pr-[20px]">
              musicians
            </p>
          </div>
          <div className="flex items-center space-x-[10px] outline-[#EEEEEE] outline outline-[1px] max-w-[200px] cursor-pointer rounded-[100px]">
            <img src={icon7} alt="community memoji" className="p-[6px]" />
            <p className="text-white font-figtree font-medium text-[18px] leading-[21.6px] pr-[20px]">
              creators
            </p>
          </div>
        </div>
      </marquee>
    </>
  );
};

export default memoji;
