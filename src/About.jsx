const About = () => {
  return (
    <div 
      id="about"
      className="flex"
    >
      {/* ====== Column 1 ====== */}
      <div className="mt-6* flex-1">
        <img 
          src="src/assets/about-page-img.png"
          alt="About Page Food Image"
          className=""
        />
      </div>

      {/* ====== Column 2 ====== */}
      <div className="flex-1">
        <p className="text-[#F4980D] font-bold text-[0.65rem] sm:text-[0.8rem] md:text-[1rem]">About</p>
        <h1 className="whitespace-pre-line font-bold text-[1.65rem] md:text-[2rem] lg:text-[2.94rem] mt-[0.5rem] mb-[1.5rem]">
          Food Is An Important{"\n"}Part Of A Balanced{"\n"}Diet
        </h1>
        <p className="whitespace-pre-line font-semibold text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-[#828282]">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt{"\n"}magna non et elit. Dolor  turpis molestie dui{"\n"}magnis facilisis at fringilla quam.
        </p>
        <p className="whitespace-pre-line font-semibold text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-[#828282] mt-[0.5rem] mb-[1.5rem]">
          Non tincidunt magna non et elit. Dolor turpis molestie{"\n"}dui magnis facilisis at fringilla quam.
        </p>
        <div className="flex">
          <button className="bg-[#FE9E0D] text-[#FFF] text-[0.7rem] md:text-[1rem] lg:text-[1.5rem] font-bold flex items-center justify-center gap-3 sm:gap-4 w-[9.5rem] md:w-[13rem] lg:w-[15.75rem] h-[2.6rem] md:h-[3.7rem] lg:h-[4.5rem] rounded-full btn-shadow">
            Learn More
          </button>
          <div className="flex gap-2 sm:gap-3">
            <button className="bg-[#484848] rounded-full px-[0.8rem] py-[0.8rem]">
              {/* ==== Play Button Icon ==== */}
            </button>
            <p className="font-semibold text-[#515151]">Watch Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;