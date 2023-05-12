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
    <div className="mt-[30px] mb-[10px] md:mt-[40px]">
      <form
        onSubmit={handleSubmit}
        className="md:max-w-[610px] flex flex-col justify-between items-center mx-auto md:relative "
      >
        <input
          type="email"
          name="Join waitlist "
          className={`font-figtree w-[350px] text-[17px] md:text-[18px] text-showgray font-medium leading-[33psx] h-62px py-[25px] pl-[40px] mx-[19px] md:w-[600px] md:h-[78px] md:pl-[44px] md:py-[32px] border-[#464646] border-solid border-[1.5px] rounded-[60px] outline-none bg-transparent`}
          placeholder="enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="md:absolute relative md:top-[-12px] md:right-3">
          <button
            type="submit"
            // onClick={(e) => handleSubmit(e)}
            className={`w-[350px] h-[62px] mt-[20px] md:w-[200px] md:h-[62px] text-[17px] md:text-[18px] font-medium leading-[33px] text-white text-center bg-gradient-to-r from-[#1864FF] to-[#42AAFF] rounded-[40px]`}
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
