import { Link } from "react-router-dom"
import { useState } from "react"

import { MdOutlineShoppingCart } from "react-icons/md"
import { HiMenuAlt4 } from "react-icons/hi"
import { HiX } from "react-icons/hi"

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const mobileRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const shoppingCartStyle = { fontSize: "2.813em" }
  const menuIconStyle = { fontSize: "2em" }
  const xMenuIconStyle = { fontSize: "2em" }
  
  const [dropNav, setDropNav] = useState(false);

  function handleNavClick() {
    setDropNav(true);
  }
  
  return (
    <div className="absolute w-screen">
      <nav className="flex justify-between items-center w-full max-w-[1260px] mx-auto px-4 sm:px-6 md:px-0 py-[1rem] sm:py-[2rem] md:py-[3.5rem]">
        {/* ====== logo ====== */}
        <div className="w-[7rem] sm:w-[9rem] md:w-[11.375rem]">
          <img 
            src="../../foodie-logo.png"
            alt="Foodie Logo"
            className="w-full h-full"
          />
        </div>

        {/* ====== links ====== */}
        <div className="hidden md:flex flex-1 mx-2">
          <ul className="w-full flex gap-x-5 lg:gap-x-10 justify-center">
            {routes.map((link, index) => (
              <li
                key={index}
                className="text-[#373737] font-bold text-[1.313em]"
              >
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ====== cart and button ====== */}
        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-10">
          <div>
            <MdOutlineShoppingCart style={shoppingCartStyle} />
          </div>
          <button
            className="bg-[#FFF] nav-btn-shadow w-[10.625rem] lg:w-[13.625rem] h-[3rem] lg:h-[4.5rem] rounded-full"
            onClick={() => alert("A table has been reserved for you.")}
          >
            Book Now
          </button>
        </div>

        {/* ====== mobile hamburger menu ====== */}
        <div className="md:hidden font-semibold text-[0.9rem] sm:text-[1rem]">
          {dropNav ? (
            <div className="absolute top-0 right-0 backdrop-blur-md bg-slate-100 bg-opacity-50">
              <div className="mobile-nav-shadow absolute z-10 flex flex-col bg-white p-4 top-0 right-0 w-72 rounded-b-lg rounded-tl-lg transition-all duration-1000 origin-top-right"
                // style="clip-path:circle(100% at 50%, 50%)"
              >
                <button
                  className="flex items-center justify-end"
                  onClick={() => setDropNav(false)}
                >
                  <HiX style={xMenuIconStyle} />
                </button>

                {/* ====== links ====== */}
                <ul className="flex flex-col items-center gap-y-5 my-5">
                  {mobileRoutes.map((link, index) => (
                    <li>
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>

                {/* ====== button ====== */}
                <div className="text-center">
                  <button className="nav-btn-shadow mb-4 bg-[#FE9E0D] w-[9.5rem] h-[3rem] sm:w-[13.625rem] sm:h-[4.5rem] rounded-full">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={handleNavClick}
            >
              <HiMenuAlt4 style={menuIconStyle} />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;