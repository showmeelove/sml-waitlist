import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Mail = ({ setModalOpen }) => {
	const [email, setEmail] = useState("");
	// const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
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

				alert(error);
			});
	};

	return (
		<div className='mt-[30px] mb-[10px] md:mt-[40px]'>
			<form
				onSubmit={handleSubmit}
				className='md:max-w-[610px] flex flex-col justify-between items-center mx-auto md:relative '>
				<input
					type='email'
					name='Join waitlist '
					className={`font-figtree w-[370px] p-6 md:py-[33px] md:pl-[40px] md:w-full text-[#A3A3A3] bg-transparent border-[1.5px] outline-none rounded-[60px]`}
					placeholder='enter your email address'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div className='md:absolute relative md:top-[-24%] md:right-[2%]'>
					<button
						type='submit'
						// onClick={(e) => handleSubmit(e)}
						className={`py-6 w-[370px] mt-[30px] md:w-[197px] md:py-[25px] text-white text-center bg-gradient-to-r from-[#1864FF] to-[#42AAFF] rounded-[40px]`}
						// disabled={error.email}
					>
						{/* {isLoading ? "submit..." : "get early access"} */}
						get early access
					</button>
				</div>
			</form>
		</div>
	);
};

export default Mail;
export const Mail = () => {
  return (
    <div className="mx-auto container px-6 mt-[50px] md:mt-[40px]">
      <form
        // onSubmit={handleSubmit}
        className="md:max-w-[610px] flex flex-col justify-between items-center mx-auto md:relative"
      >
        <input
          type="email"
          name="Join waitlist "
          className={`font-figtree w-[340px] h-[62px] md:h-[78px] pl-[40px] py-[25px] md:py-[33px] md:pl-[40px] md:w-full text-[#A3A3A3] bg-transparent border-[1.5px] outline-none rounded-[60px]`}
          placeholder="enter your email address"
          // value={}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <div className="md:absolute mt-[30px] md:bottom-0 md:right-0 md:mb-[8px] mr-[10px]">
          <button
            type="submit"
            // onClick={(e) => handleSubmit(e)}
            className={`py-[2px] w-[339px] h-[62px] md:h-[62px] mt-[15px] md:w-[200px] md:py-[7px] text-white bg-gradient-to-r from-[#1864FF] to-[#42AAFF] rounded-[40px]`}
            // disabled={error.email}
          >
            {/* {isLoading ? "submit..." : "get early access"} */}
            <span className="text-center text-[17px] md:text-[18px] leading-[33px] font-medium">
              get early access
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
