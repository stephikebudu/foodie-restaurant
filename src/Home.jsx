import About from "./About"
import Testimonials from "./Testimonials"
import Contact from "./Contact"

const Home = () => {
  return (
    <div className="">
      {/* ====== Landing page ====== */}
      <section className="h-[100vh] min-h-[100vh] border border-red-900">
        {/* ====== blobs ====== */}
        <div>
          <img 
            src=""
            alt=""
            className=""
          />
        </div>
        <div>

        </div>
        This is the home/landing page
      </section>

      {/* ====== About page ====== */}
      {/* <section>
        <About />
      </section> */}

      {/* ====== Testimonials page ====== */}
      {/* <section>
        <Testimonials />
      </section> */}

      {/* ====== Contact page ====== */}
      {/* <section>
        <Contact />
      </section> */}
    </div>
  );
}

export default Home;