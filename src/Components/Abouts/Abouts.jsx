import React from 'react'
import { HiOutlineUser, HiOutlineMail, HiOutlineLocationMarker, HiOutlineAcademicCap } from "react-icons/hi";
import { Container } from '../Container';
import { SectionHeading } from '../SectionHeading';

export const Abouts = () => {
    return (
        <section>
            <Container className=' bg-orange-50 rounded-2xl md:px-10!'>
                <div>

                    {/* Section Heading */}
                    <div>
                        <SectionHeading
                            heading1='About'
                            heading2='Me'
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div>

                            <h3 className="text-3xl font-semibold mb-6">
                                Front-End Web Developer
                            </h3>

                            <p className="text-gray-600 leading-8 mb-6">
                                Motivated and passionate Front-End Web Developer with strong
                                skills in HTML, CSS, JavaScript, React.js, Tailwind CSS,
                                Bootstrap and Firebase.
                            </p>

                            <p className="text-gray-600 leading-8">
                                I enjoy building responsive, user-friendly websites and
                                continuously learning modern technologies to improve my skills.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl p-8 border text-black border-gray-200 shadow-xl">

                            <h3 className="text-2xl font-semibold mb-8">
                                Personal Information
                            </h3>

                            <div className="space-y-6">

                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-500 text-white p-3 rounded-xl">
                                        <HiOutlineUser size={24} />
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">Name</p>
                                        <h4 className="text-lg font-medium">
                                            Dola Akter
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-500 text-white p-3 rounded-xl">
                                        <HiOutlineMail size={24} />
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <h4 className="text-lg font-medium">
                                            dola.akter20320@gmail.com
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-500 text-white p-3 rounded-xl">
                                        <HiOutlineLocationMarker size={24} />
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">Location</p>
                                        <h4 className="text-lg font-medium">
                                            Dhaka, Bangladesh
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-500 text-white p-3 rounded-xl">
                                        <HiOutlineAcademicCap size={24} />
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">Experience</p>
                                        <h4 className="text-lg font-medium">
                                            Fresher
                                        </h4>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}
