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
					className={`font-figtree w-[350px] p-6 md:py-[33px] md:pl-[40px] md:w-full text-[#A3A3A3] bg-transparent border-[1.5px] outline-none rounded-[60px]`}
					placeholder='enter your email address'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div className='md:absolute relative md:top-[-12%] md:right-[2%]'>
					<button
						type='submit'
						// onClick={(e) => handleSubmit(e)}
						className={`px-[24px] w-[350px] mt-[20px] md:w-[197px] py-[25px] text-white text-center bg-gradient-to-r from-[#1864FF] to-[#42AAFF] rounded-[40px]`}
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

