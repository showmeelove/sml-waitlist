/* eslint-disable react/no-unknown-property */
import slidemd from "../../assets/images/slide-desk.png";
import slidesm from "../../assets/images/slide-md.png";

const memoji = () => {
  return (
    <marquee
      behavior="alternate"
      scrolldelay="0.1"
      scrollamount="17"
      direction="left"
    >
      <div className="mt-[30px]">
        <div className="md:block hidden">
          <img src={slidemd} alt="sliding memojis" />
        </div>
        {/* mobile screen */}
        <div className="md:hidden sm:block">
          <img src={slidesm} alt="sliding memojis" className="" />
        </div>
      </div>
    </marquee>
  );
};

export default memoji;
