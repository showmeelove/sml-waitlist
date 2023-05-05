const mail = () => {
  return (
    <div className="mt-[50px] md:mt-[106px]">
      <form
        // onSubmit={handleSubmit}
        className="md:max-w-[610px] mx-auto md:relative "
      >
        <input
          type="email"
          name="Join waitlist "
          className={`font-figtree w-[390px] p-6 md:py-[33px] md:pl-[40px] md:w-[610px] text-[#A3A3A3] bg-transparent border-[1.5px] outline-none rounded-[60px]`}
          placeholder="enter your email address"
          // value={}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <div className="md:absolute relative md:top-[-24%] md:right-[2%]">
          <button
            type="submit"
            // onClick={(e) => handleSubmit(e)}
            className={`py-6 w-[389px] mt-[30px] md:w-[197px] md:py-[25px] text-white text-center bg-gradient-to-r from-[#1864FF] to-[#42AAFF] rounded-[40px]`}
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
