import { Route, Routes } from "react-router-dom"
import './App.css'
import { AnimatePresence } from "framer-motion";

import Navbar from "src/components/Navbar"
import Home from "src/Home"
import About from "src/About"
import Testimonials from "src/Testimonials"
import Contact from "src/Contact"

function App() {
  return (
    <>
      <AnimatePresence>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about" element={<About />} />
          <Route path="#testimonials" element={<Testimonials />} />
          <Route path="#contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
