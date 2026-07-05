import React, { useState, useEffect }  from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Container } from '../Container';
import { NavLink } from 'react-router-dom';

export const Footer = () => {

    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    const updateDateTime = () => {
        const updateDate = new Date();
        const dateTime = updateDate.toLocaleString();
        setDateTime(dateTime);
    };    
    useEffect(() => {
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="bg-gray-950">
            <Container className="py-10! lg:py-20!">
                <div className="flex flex-wrap justify-between gap-10 md:grid-cols-3">

                    {/* Logo & Description */}
                    <div>
                        <h2 className="md:mb-4 mb-2 md:text-3xl text-2xl font-bold text-white">
                            Dola <span className="text-orange-600">Akter</span>
                        </h2>

                        <p className="w-full max-w-87 text-gray-300 md:text-base text-sm">
                            Passionate Front-End Developer specializing in React.js,
                            JavaScript, Tailwind CSS, and Bootstrap. I love creating modern,
                            responsive, and user-friendly websites.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="md:mb-4 mb-3 text-lg font-semibold text-orange">
                            Quick Links
                        </h6>

                        <NavLink
                            to="/"
                            className="md:mb-4 mb-3 block text-gray-400 text-sm md:text-base duration-300 hover:pl-1 hover:text-orange"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className="md:mb-4 mb-3 block text-gray-400 text-sm md:text-base duration-300 hover:pl-1 hover:text-orange"
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/projects"
                            className="md:mb-4 mb-3 block text-gray-400 text-sm md:text-base duration-300 hover:pl-1 hover:text-orange"
                        >
                            Projects
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className="md:mb-4 mb-3 block text-gray-400 text-sm md:text-base duration-300 hover:pl-1 hover:text-orange"
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="md:mb-4 mb-3 text-lg font-semibold text-orange">
                            Services
                        </h6>

                        <a
                            href="#home"
                            className="md:mb-4 mb-3 block text-gray-400 text-sm md:text-base duration-300 hover:pl-1 hover:text-orange"
                        >
                            Web Design
                        </a>

                        <a
                            href="#about"
                            className="md:mb-4 mb-3 block text-gray-400 text-sm md:text-base duration-300 hover:pl-1 hover:text-orange"
                        >
                            Web Development
                        </a>

                        <a
                            href="#projects"
                            className="md:mb-4 mb-3 block text-gray-400 text-sm md:text-base duration-300 hover:pl-1 hover:text-orange"
                        >
                            Mobile Responsive Design
                        </a>
                    </div>

                    <div className='hidden lg:block'></div>
                </div>

            </Container>
            <div className="py-6 border-t border-gray-700 text-center">
                <p className="text-sm md:text-base text-gray-500">
                    © 2026 Dola Akter. All Rights Reserved.
                </p>

                <p className="pt-2 text-xs md:text-sm text-gray-400">
                    {dateTime}
                </p>
            </div>
        </footer>
    )
}
