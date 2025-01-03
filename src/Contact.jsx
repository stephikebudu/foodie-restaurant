const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-10 sm:gap-16 lg:gap-20 mb-10"
    >
      <h1 className="sm:whitespace-pre-line text-[#4c4c4c] text-center font-bold text-[1.65rem] md:text-[2rem] lg:text-[2.94rem] mt-[1.5rem]">Have Question In Mind?{"\n"}Let Us Help You</h1>
      <div className="bg-[#FFFFFF] w-[95%] sm:max-w-[80%] flex justify-between py-[1rem] pr-[1rem] pl-[1rem] sm:py-[1.5rem] sm:pr-[1.5rem] sm:pl-[1.7rem] rounded-full">
        <input
          type="email"
          autocomplete
          placeholder="yourmail@gmail.com"
          className="outline-0 bg-none w-full text-[0.75rem] md:text-[0.95rem] lg:text-[1.2rem] "
        />
        <button className="bg-[#FE9E0D] w-[10rem] h-[2.8rem] sm:w-[15rem] sm:h-[3.5rem] rounded-full text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] font-bold text-center text-[#fff]">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;