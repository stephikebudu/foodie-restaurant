import About from "./About"
import Work from "./Work"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import Footer from "src/components/Footer"


import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const btnIconStyle = { fontSize: "1.5em" };

  return (
    <div className="px-4 xl:px-0 mx-auto max-w-[1260px]">
      {/* ====== Landing page ====== */}
      <section className="lg:h-[100vh]* lg:min-h-[100vh]">
        {/* ====== blobs ====== */}
        <div className="">
          <img 
            src="../src/assets/blobs/blob-1.svg"
            alt="Blob 1"
            className="w-1/2 absolute top-0 right-0 -z-10 max-w-[567px]"
          />
        </div>

        <div>
          <img 
            src="../src/assets/blobs/blob-2.svg"
            alt="Blob 2"
            className="absolute top-[108%] sm:top-[78%] md:top-[100%] lg:top-[140%] left-0 -z-10 max-h-[397px] sm:max-h-[478px] md:max-h-[637px] lg:max-h-full"
          />
        </div>

        {/* ====== landing page content ====== */}
        <div className="mt-16 sm:mt-32 md:mt-40 lg:mt-44 sm:flex">
          <div className="flex-1">
            <h1 className="whitespace-pre-line font-bold text-[1.65rem] md:text-[2rem] lg:text-[2.94rem] text-[#4C4C4C]">
              Your Favourite Food{"\n"}Delivered Hot &{"\n"}Fresh
            </h1>
            <p className="whitespace-pre-line my-[2rem] sm:my-[3rem] font-semibold text-[0.7rem] md:text-[0.9rem] lg:text-[1.2rem] text-[#828282]">
              Healthy switcher chefs do all the prep work, like{"\n"}peeding, chopping & marinating, so you can cook{"\n"}a fresh food.
            </p>
            <div>
              <button className="bg-[#FE9E0D] text-[#FFF] text-[0.7rem] md:text-[1rem] lg:text-[1.5rem] font-bold flex items-center justify-center gap-3 sm:gap-4 px-[1.2rem] md:px-[1.5rem] lg:w-[15.75rem] h-[2.6rem]* py-[0.75rem] md:py-[0.95rem] lg:h-[4.5rem] rounded-full btn-shadow">
                Order Now
                <FaArrowRightLong style={btnIconStyle} />
              </button>
            </div>
          </div>

          <div className="-mt-4 sm:mt-6 flex-1">
            <img
              src="../src/assets/home-page-img.png"
              alt="Home page food image"
              className="lg:max-w-[528px] sm:-mt-16"
            />
          </div>
        </div>
      </section>

      {/* ====== About page ====== */}
      <section className="lg:h-[100vh]* lg:min-h-[100vh] md:mt-20">
        <About />
      </section> 

      {/* ====== Work page ====== */}
      <section className="lg:h-[100vh]* lg:min-h-[100vh] mt-10 md:mt-0 lg:mt-40">
        <Work />
      </section>

      {/* ====== Testimonials page ====== */}
      <section className="lg:h-[100vh]* lg:min-h-[100vh] mt-10 md:mt-40">
        <Testimonials />
      </section>

      {/* ====== Contact page ====== */}
      <section className="mt-10 md:mt-40">
        <Contact />
      </section>

      {/* ====== Footer ====== */}
      {/* <section>
        <Footer />
      </section> */}
    </div>
  );
}

export default Home;