// /* eslint-disable react/no-unknown-proper
import slidemd from "../../assets/images/slide-desk.png";
import slidesm from "../../assets/images/slide-md.png";

const memoji = () => {
  return (
    <marquee className>
      <div className="md:block hidden">
        <img src={slidemd} alt="sliding memojis" />
      </div>
      {/* mobile screen */}
      <div className="md:hidden">
        <img src={slidesm} alt="sliding memojis" />
      </div>
    </marquee>
  );
};

export default memoji;
