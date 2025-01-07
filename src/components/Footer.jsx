import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center gap-8 sm:gap-20 md:gap-28 mb-12 sm:mb-20">
      {/* ====== 1st column ====== */}
      <div className="flex flex-col gap-6">
        <div className="w-[4rem] sm:w-[6rem] max-w-[9rem]">
          <img 
            src="../../footer-logo.png"
            alt="Foodie Footer Logo"
            className=""
          />
        </div>

        {/* ====== social links section ====== */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
          <div className="w-[1.3rem] h-[1.3rem] sm:w-[1.65rem] sm:h-[1.65rem] md:w-[2.2rem] md:h-[2.2rem]"><FaTwitter size="100%" color="#585858" /></div>
          <div className="w-[1.3rem] h-[1.3rem] sm:w-[1.65rem] sm:h-[1.65rem] md:w-[2.2rem] md:h-[2.2rem]"><FaYoutube size="100%" color="#585858" /></div>
          <div className="w-[1.3rem] h-[1.3rem] sm:w-[1.65rem] sm:h-[1.65rem] md:w-[2.2rem] md:h-[2.2rem]"><FaLinkedin size="100%" color="#585858" /></div>
          <div className="w-[1.3rem] h-[1.3rem] sm:w-[1.65rem] sm:h-[1.65rem] md:w-[2.2rem] md:h-[2.2rem]"><FaFacebookF size="100%" color="#585858" /></div>
        </div>
      </div>

      {/* ====== 2nd column ====== */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6 lg:gap-16">
        {/* ====== sub-column 1 ====== */}
        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Quality</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Help</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Share</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Careers</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Work</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Testimonials</p>
        </div>

        {/* ====== sub-column 2 ====== */}
        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">244-5333-7783</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">hello@food.com</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">press@food.com</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">contact@food.com</p>
        </div>

        {/* ====== sub-column 3 ====== */}
        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Terms & Conditions</p>
          <p className="font-bold text-[#4C4C4C] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;