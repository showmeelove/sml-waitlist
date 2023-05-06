const mail = () => {
  return (
    <div className="mt-[30px] mb-[10px] md:mt-[40px]">
      <form
        // onSubmit={handleSubmit}
        className="md:max-w-[610px] flex flex-col justify-between items-center mx-auto md:relative "
      >
        <input
          type="email"
          name="Join waitlist "
          className={`font-figtree w-[370px] p-6 md:py-[33px] md:pl-[40px] md:w-full text-[#A3A3A3] bg-transparent border-[1.5px] outline-none rounded-[60px]`}
          placeholder="enter your email address"
          // value={}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <div className="md:absolute relative md:top-[-24%] md:right-[2%]">
          <button
            type="submit"
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

export default mail;
