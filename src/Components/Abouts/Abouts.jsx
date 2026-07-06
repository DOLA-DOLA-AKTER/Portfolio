import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { Container } from '../Container';
import { SectionHeading } from '../SectionHeading';

const personalInfo = [
    {
        id: 1,
        icon: <FaRegUser className=" md:text-2xl text-lg" />,
        title: "Name",
        value: "Dola Akter",
    },
    {
        id: 2,
        icon: <MdMailOutline className=" md:text-2xl text-lg" />,
        title: "Email",
        value: "dola.akter20320@gmail.com",
    },
    {
        id: 3,
        icon: <GrLocation className=" md:text-2xl text-lg" />,
        title: "Location",
        value: "Dhaka, Bangladesh",
    },
    {
        id: 4,
        icon: <HiOutlineAcademicCap className=" md:text-2xl" />,
        title: "Experience",
        value: "Entry-Level Front-End Developer",
    },
];

export const Abouts = () => {
    return (
        <section id='about' className="bg-orange-50 ">
            <Container className=' rounded-2xl md:px-10!'>
                <div>

                    {/* Section Heading */}
                    <div>
                        <SectionHeading
                            heading1='About'
                            heading2='Me'
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div>

                            <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold mb-6">
                                Front-End Web Developer
                            </h3>

                            <p className="text-gray-600 leading-8 mb-6 text-sm md:text-base">
                                I am a passionate Front-End Web Developer who enjoys building responsive, accessible, and user-friendly web applications using React.js, JavaScript, and Tailwind CSS.

                            </p>

                            <p className="text-gray-600 leading-8 text-sm md:text-base">
                                Currently, I am expanding my skills by learning modern web technologies and best practices. I enjoy solving problems, writing clean code, and creating interactive user experiences.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl p-8 border text-black border-gray-200 shadow-xl">

                            <h3 className="text-2xl font-semibold mb-8">
                                Personal Information
                            </h3>

                            <div className="space-y-6">

                                {
                                    personalInfo.map((item) => (
                                        <div key={item.id} className="flex items-center gap-4">
                                            <div className="bg-orange-500 text-white p-3 rounded-xl">
                                                {item.icon}
                                            </div>

                                            <div>
                                                <p className="text-gray-400 text-sm"> {item.title} </p>
                                                <h4 className="md:text-lg text-base font-medium break-all">
                                                    {item.value}
                                                </h4>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
