import React from 'react'
import { FiDownload } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa6";
import portfolio from '../../assets/portfolio.png'
import { Container } from '../Container';
import { Button } from '../Button/Button';
import resume from '../../assets/resume.pdf'


export const Hero = () => {
    return (
        <section className="lg:mt-0 mt-20 min-h-screen bg- text-white">
            <Container>
                <div className="flex flex-col justify-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <p className="text-orange text-2xl mb-3">
                                
                            </p>

                            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
                                Hi, I'm
                                {" "}
                                <span className="text-orange">
                                    Dola Akter
                                </span>
                            </h1>

                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4 ">
                                Front-End Web Developer
                            </h2>

                            <p className="text-gray-600 mt-6 leading-8 max-w-xl">
                                I build modern, responsive and user-friendly websites using
                                React.js, Tailwind CSS and JavaScript. Passionate about creating
                                clean UI and smooth user experiences.
                            </p>

                            <div className="flex flex-wrap gap-5 mt-8">
                                <Button>Hire Me</Button>

                                <Button className="bg-transparent! border-2 border-orange hover:bg-orange! duration-300 text-orange! hover:text-white!">
                                    <a
                                        href={resume}
                                        download
                                        className="flex items-center gap-2">
                                        Download Resume
                                        <FiDownload />
                                    </a>
                                </Button>
                            </div>
                        </div>


                        <div className="relative flex justify-center">
                            <div className="absolute md:w-80 w-70 h-70 md:h-80 bg-orange-600/20 rounded-full blur-3xl"></div>

                            <img
                                src={portfolio}
                                alt="Profile"
                                className="relative w-80 md:w-105 rounded-full object-cover overflow-hidden"
                            />
                        </div>

                    </div>

                    {/* Scroll Down */}
                    <div className="flex justify-center pt-10 mg:pt-0">
                        <a
                            href="#about"
                            className="w-14 h-14 rounded-full flex items-center justify-center bg-orange-600  duration-300 animate-bounce hover:scale-110">
                            <FaArrowDown className='text-white '/>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}
