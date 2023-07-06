import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const Mail = ({ setModalOpen }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const [error, setError] = useState("");
  const notify = (error) => toast.error(error);

  const handleChange = (e) => {
    // if (!isValidMail(e.target.value)) {
    //   setError("Email is invalid, chief!😏");
    // } else {
    //   setError(null);
    // }

    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      notify("email input can not be blank!");
      return;
    }

    setIsLoading(true);
    fetch("https://showmeelove.onrender.com/api/v1/waitlist", {
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
            // setError();
            notify("email already added to waitlist!");
            throw new Error(
              "Invalid email address or email already added to waitlist"
            );
          }

          if (response.status === 500) {
            notify("server error. try again later.");
            throw new Error("server error. try again later");
          }

          if (response.status === 401) {
            notify("unathorized");
            throw new Error("unathorized");
          }
          if (response.status === 403) {
            notify("forbidden");
            throw new Error("forbidden");
          }
          if (response.status === 404) {
            notify("forbidden");
            throw new Error("not found");
          }
        }
        setEmail("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        notify("failed to fetch, network error!");
        // alert(error);
      });
  };

  return (
    <div className="mt-[50px] mb-[0px] md:mt-[40px]">
      <form
        onSubmit={handleSubmit}
        className="md:max-w-[610px] flex flex-col space-y-6 justify-between items-center mx-auto md:relative"
      >
        <div className="mx-[30px]">
          <input
            type="email"
            name="join waitlist"
            className={`h-[58px] mx-auto px-4 w-[350px] py-[23px] pl-[38px] md:h-[78px] md:w-[610px] md:py-[33px] md:pl-[44px] text-[#dedede] font-medium md:text-[18px] md:leading[33px] font-figtree border-[#464646] border-solid border-[1.5px] rounded-[60px] outline-none bg-[#010E21]`}
            placeholder="enter your email address"
            // required
            autoComplete="off"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="md:absolute relative md:top-[-12] md:bottom-2 md:right-2">
          <button
            type="submit"
            // onClick={(e) => handleSubmit(e)}
            className={`w-[351px] h-[58px] mx-auto px-4  md:h-[62px] md:w-[193.48px] md:text-[16.17px] md:leading-[29.65px] font-medium font-figtree text-[#fefefe] text-center bg-[#012C6B] md:hover:bg-gradient-to-r from-[#1864FF] to-[#42AAFF] rounded-[35.942px]`}
          >
            {isLoading ? "hold on chief..!" : "get early access"}
            {/* get early access */}
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Mail;
