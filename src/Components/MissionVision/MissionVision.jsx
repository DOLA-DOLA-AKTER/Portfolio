import React from 'react'
import { FaRocket } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Container } from "../Container";

export const MissionVision = () => {
    return (
        <section>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Mission Card */}
                    <div className="border-2 border-orange-100 rounded-xl p-8 shadow-md hover:border-orange-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
                        <FaRocket className="text-5xl text-orange mb-5" />

                        <h3 className="md:text-3xl text-2xl font-bold text-gray-900 mb-3">
                            Mission
                        </h3>

                        <p className="text-gray-600 leading-7">
                            Become a professional full-stack developer and build useful
                            applications.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white border border-orange-100 rounded-xl p-8 shadow-md hover:border-orange-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
                        <FaEye className="text-5xl text-orange-500 mb-5 " />

                        <h3 className="md:text-3xl text-2xl font-bold text-gray-900 mb-3">
                            Vision
                        </h3>

                        <p className="text-gray-600 leading-7">
                            Work with global tech companies and contribute to innovative
                            projects.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

