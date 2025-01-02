import { PiForkKnifeBold } from "react-icons/pi";
import { GiCardPickup } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";

const Work = () => {
  return (
    <div
      id="work"
      className="h-[100vh] min-h-[100vh] flex flex-col items-center gap-16"
    >
      <div className="flex flex-col items-center">
        <p className="text-[#F4980D] font-bold text-[0.65rem] sm:text-[0.8rem] md:text-[1rem]">Work</p>
        <h1 className="text-[#4c4c4c] font-bold text-[1.65rem] md:text-[2rem] lg:text-[2.94rem] my-[1.5rem]">How It Works</h1>
        <p className="whitespace-pre-line text-center font-semibold text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-[#828282]">Lorem ipsum dolor sit amet consectetur. Non tincidunt{"\n"}magna non et elit. Dolor  turpis molestie dui{"\n"}magnis facilisis at fringilla quam.</p>
      </div>

      {/* ====== Work Cards Section ====== */}
      <div className="flex flex-col sm:flex-row gap-8 max-w-[75%] sm:max-w-[100%] md:gap-10 md:px-10 lg:gap-14 lg:px-14">
        {/* ====== Card 1 ====== */}
        <div className="bg-[#fff] rounded-[1.25rem] flex-1 flex flex-col items-center py-10 px-4 work-section-cards-shadow">
          <div className="h-[3rem] w-[3rem] sm:h-[3rem] sm:w-[3rem] lg:h-[4rem] lg:w-[4rem]">
            <PiForkKnifeBold size="100%" color="#FE9E0D" />
          </div>
          <div className="my-[2.5rem]">
            <h3 className="text-[#505050] font-bold text-[1rem] md:text-[1.05rem] lg:text-[1.3rem] text-center">Pick Meals</h3>
          </div>
          <div>
            <p className="text-center text-[#474747] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
          </div>
        </div>

        {/* ====== Card 2 ====== */}
        <div className="bg-[#fff] rounded-[1.25rem] flex-1 flex flex-col items-center py-10 px-4 work-section-cards-shadow">
          <div className="h-[3rem] w-[3rem] sm:h-[3rem] sm:w-[3rem] lg:h-[4rem] lg:w-[4rem]">
            <GiCardPickup size="100%" color="#FE9E0D" />
          </div>
          <div className="my-[2.5rem]">
            <h3 className="text-[#505050] font-bold text-[1rem] md:text-[1.05rem] lg:text-[1.3rem] text-center">Choose How Often</h3>
          </div>
          <div>
            <p className="text-center text-[#474747] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Lorem ipsum dolor sit amet consectetur. Maecenas orci et </p>
          </div>
        </div>

        {/* ====== Card 3 ====== */}
        <div className="bg-[#fff] rounded-[1.25rem] flex-1 flex flex-col items-center py-10 px-4 work-section-cards-shadow">
          <div className="h-[3rem] w-[3rem] sm:h-[3rem] sm:w-[3rem] lg:h-[4rem] lg:w-[4rem]">
            <FaTruckArrowRight size="100%" color="#FE9E0D" />
          </div>
          <div className="my-[2.5rem]">
            <h3 className="text-[#505050] font-bold text-[1rem] md:text-[1.05rem] lg:text-[1.3rem] text-center">Fast Deliveries</h3>
          </div>
          <div>
            <p className="text-center text-[#474747] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;