import { FaCirclePlay } from "react-icons/fa6";

const About = () => {
  return (
    <div 
      id="about"
      className="min-h-[100vh] flex flex-col-reverse sm:flex-row"
    >
      {/* ====== Column 1 ====== */}
      <div className="mt-14 sm:mt-0 flex-1 place-content-center">
        <img 
          src="src/assets/about-page-img.png"
          alt="About Page Food Image"
          className="lg:max-w-[528px]"
        />
      </div>

      {/* ====== Column 2 ====== */}
      <div className="flex-1">
        <p className="text-[#F4980D] font-bold text-[0.65rem] sm:text-[0.8rem] md:text-[1rem]">About</p>
        <h1 className="whitespace-pre-line text-[#4c4c4c] font-bold text-[1.65rem] md:text-[2rem] lg:text-[2.94rem] mt-[0.5rem] mb-[1.5rem]">
          Food Is An Important{"\n"}Part Of A Balanced{"\n"}Diet
        </h1>
        <p className="whitespace-pre-line font-semibold text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-[#828282]">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt{"\n"}magna non et elit. Dolor  turpis molestie dui{"\n"}magnis facilisis at fringilla quam.
        </p>
        <p className="whitespace-pre-line font-semibold text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-[#828282] mt-[0.5rem] mb-[1.5rem]">
          Non tincidunt magna non et elit. Dolor turpis molestie{"\n"}dui magnis facilisis at fringilla quam.
        </p>
        <div className="flex flex-row-reverse gap-4 sm:gap-6 place-content-start">
          <button className="bg-[#FE9E0D] text-[#FFF] text-[0.7rem] md:text-[1rem] lg:text-[1.5rem] font-bold flex items-center justify-center gap-3 sm:gap-4 px-[1.2rem] md:px-[1.5rem] lg:w-[15.75rem] h-[2.6rem]* py-[0.75rem] md:py-[0.95rem] lg:h-[4.5rem] rounded-full btn-shadow">
            Learn More
          </button>
          <div className="flex gap-2 sm:gap-3 justify-items-center items-center">
            <button className="h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] lg:h-[4rem] lg:w-[4rem]">
              <FaCirclePlay size="100%" color="#484848" />
            </button>
            <p className="font-semibold text-[0.7rem] md:text-[1rem] lg:text-[1.5rem] text-[#515151]">Watch Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;