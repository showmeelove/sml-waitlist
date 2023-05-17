import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Mail = ({ setModalOpen }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://showmeelove-api.vercel.app/v1/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setModalOpen(true);
          setIsLoading(false);
          console.log("Request sent successfully!");
        } else {
          if (response.status === 400) {
            throw new Error(
              "Invalid email address or email already added to waitlist"
            );
          }

          if (response.status === 500) {
            throw new Error("Server error. Try again later");
          }

          if (response.status === 401) {
            throw new Error("Unathorized");
          }
          if (response.status === 403) {
            throw new Error("Forbidden");
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);

        alert(error);
      });
  };

  return (
    <div className="mt-[50px] mb-[0px] md:mt-[70px]">
      <form
        onSubmit={handleSubmit}
        className="md:max-w-[610px]  flex flex-col space-y-6 justify-between items-center mx-auto md:relative "
      >
        <div className="mx-[30px]">
          <input
            type="email"
            name="join waitlist"
            className={`h-[58px] w-[360px] py-[23px] pl-[38px] md:h-[78px] md:w-[610px] md:py-[33px] md:pl-[44px] text-[#dedede] font-medium md:text-[18px] md:leading[33px] font-figtree border-[#464646] border-solid border-[1.5px] rounded-[60px] outline-none bg-[#010E21]`}
            placeholder="enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="md:absolute relative md:top-[-12] md:bottom-2 md:right-2">
          <button
            type="submit"
            // onClick={(e) => handleSubmit(e)}
            className={`w-[357px] h-[58px]  md:h-[62px] md:w-[193.48px] md:text-[16.17px] md:leading-[29.65px] font-medium  text-white text-center bg-[#012C6B] md:hover:bg-gradient-to-r from-[#1864FF] to-[#42AAFF] rounded-[35.942px]`}
          >
            {isLoading ? "hold on cheif..!" : "get early access"}
            {/* get early access */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mail;
