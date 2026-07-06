import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Container } from "../Container";
import { Button } from "../Button/Button";
import resume from "../../assets/resume.pdf";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '100%',
  height: '100%',
  bgcolor: "transparent",
  boxShadow: 24,
};

export const Navber = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation()
  const pathname = location.pathname 

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50 backdrop-blur-[10px] transition-all duration-300">
      <nav>
        <Container className="py-0! lg:py-0!">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <div>
              <NavLink
                to='/'
                className="text-4xl font-bold text-black "
              >
                <span className="bg-linear-to-r from-orange-800 via-orange-600 to-black bg-clip-text text-transparent">D</span>ola <span className="text-orange">Akter</span>
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center justify-center gap-8 text-lg font-medium text-gray-900">
              <li>
                <NavLink to="/" className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/" ? "text-orange after:w-full" : "text-gray-900"}`}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/about" ? "text-orange after:w-full" : "text-gray-900"}`}>
                  About Me
                </NavLink>
              </li>

              <li>
                <NavLink to="/skills" className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/skills" ? "text-orange after:w-full" : "text-gray-900"}`}>
                  Skills
                </NavLink>
              </li>

              <li>
                <NavLink to="/projects" className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/projects" ? "text-orange after:w-full" : "text-gray-900"}`}>
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/contact" ? "text-orange after:w-full" : "text-gray-900"}`}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Resume Button */}
            <div>
              <div onClick={handleOpen} className="hidden lg:block">
                <Button>Resume</Button>
              </div>
              <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className='relative'>
                  <iframe
                    src={resume}
                    title="Resume"
                    width="100%"
                    height="100%"
                  />
                  <div onClick={handleClose} className="absolute top-3.5 right-40 hover:bg-white/10 p-1 rounded-full duration-300" >
                    <HiX className="text-xl text-white cursor-pointer" />
                  </div>
                </Box>
              </Modal>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-3xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-5 border-t backdrop:blur-6xl">
              <ul className="flex flex-col gap-5 text-base text-center text-gray-900">
                <li>
                  <NavLink to="/" onClick={() => setIsOpen(false)} className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/" ? "text-orange after:w-full" : "text-gray-900"}`}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" onClick={() => setIsOpen(false)} className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/about" ? "text-orange after:w-full" : "text-gray-900"}`}>
                    About Me
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/skills" onClick={() => setIsOpen(false)} className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/skills" ? "text-orange after:w-full" : "text-gray-900"}`}>
                    Skills
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/projects" onClick={() => setIsOpen(false)} className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/projects" ? "text-orange after:w-full" : "text-gray-900"}`}>
                    Projects
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" onClick={() => setIsOpen(false)} className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange after:duration-300 hover:after:w-full ${pathname === "/contact" ? "text-orange after:w-full" : "text-gray-900"}`}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <div onClick={handleOpen}>
                    <Button>Resume</Button>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </Container>
      </nav>
    </header>
  );
};
