import { MdOutlineStarPurple500 } from "react-icons/md";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center gap-10 sm:gap-16 lg:gap-20"
    >
      {/* ====== 1st row ====== */}
      <div className="flex flex-col items-center">
        <p className="text-[#F4980D] font-bold text-[0.65rem] sm:text-[0.8rem] md:text-[1rem]">Testimonial</p>
        <h1 className="text-[#4c4c4c] text-center font-bold text-[1.65rem] md:text-[2rem] lg:text-[2.94rem] my-[1.5rem]">What They Are Saying</h1>
        <p className="sm:whitespace-pre-line text-center font-semibold text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-[#828282]">Lorem ipsum dolor sit amet consectetur. Non tincidunt{"\n"}magna non et elit. Dolor  turpis molestie dui{"\n"}magnis facilisis at fringilla quam.</p>
      </div>

      {/* ====== 2nd row ====== */}
      <div className="flex flex-col items-center bg-[#FFFFFF] w-[90%] sm:w-[70%] sm:max-w-[70%] pt-4 sm:pt-6 pb-8 sm:pb-10 px-3 rounded-xl sm:rounded-3xl testimonial-section-card-shadow">
        {/* ====== customer image ====== */}
        <div className="h-[5rem] w-[5rem] lg:h-[7rem] lg:w-[7rem] rounded-full overflow-hidden">
          <img
            src="src/assets/customer-img.jpeg"
            alt="customer image"
            className="object-cover h-[100%] w-[100%] max-h-[100%] max-w-[100%] block"
          />
        </div>

        {/* ====== customer remark ====== */}
        <p className="sm:whitespace-pre-line text-center font-semibold text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-[#515151] mt-[0.8rem] sm:mt-[1.5rem]">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt{"\n"}magna non et elit. Dolor  turpis molestie dui{"\n"}magnis facilisis at fringilla quam.
        </p>

        {/* ====== customer star rating ====== */}
        <div className="flex my-[1rem] sm:my-[1.8rem] sm:gap-[1px]">
          <div className="h-[1.25rem] w-[1.25rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem]">
            <MdOutlineStarPurple500 size="100%" color="#FE9E0D" />
          </div>
          <div className="h-[1.25rem] w-[1.25rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem]">
            <MdOutlineStarPurple500 size="100%" color="#FE9E0D" />
          </div>
          <div className="h-[1.25rem] w-[1.25rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem]">
            <MdOutlineStarPurple500 size="100%" color="#FE9E0D" />
          </div>
          <div className="h-[1.25rem] w-[1.25rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem]">
            <MdOutlineStarPurple500 size="100%" color="#FE9E0D" />
          </div>
          <div className="h-[1.25rem] w-[1.25rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem]">
            <MdOutlineStarPurple500 size="100%" color="#FE9E0D" />
          </div>
        </div>

        {/* ====== customer name ====== */}
        <h3 className="text-[1rem] md:text-[1.05rem] lg:text-[1.3rem] text-[#1C1C1C] font-semibold">John Doe</h3>
      </div>
    </div>
  );
}

export default Testimonials;