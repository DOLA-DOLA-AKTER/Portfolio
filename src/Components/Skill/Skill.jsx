import React from 'react'
import { Container } from '../Container';
import { SectionHeading } from '../SectionHeading';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 className="text-5xl text-orange-500" />,
        level: "95%",
    },
    {
        name: "CSS",
        icon: <FaCss3Alt className="text-5xl text-blue-500" />,
        level: "90%",
    },
    {
        name: "JavaScript",
        icon: <FaJs className="text-5xl text-yellow-400" />,
        level: "85%",
    },
    {
        name: "React",
        icon: <FaReact className="text-5xl text-cyan-400" />,
        level: "85%",
    },
    {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-5xl text-sky-400" />,
        level: "90%",
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-5xl text-purple-500" />,
        level: "85%",
    },
    {
        name: "Firebase",
        icon: <SiFirebase className="text-5xl text-yellow-500" />,
        level: "60%",
    },
    {
        name: "Git",
        icon: <FaGitAlt className="text-5xl text-red-500" />,
        level: "70%",
    },
    {
        name: "GitHub",
        icon: <FaGithub className="text-5xl text-black" />,
        level: "65%",
    },
];


export const Skill = () => {
    return (
        <section>
            <Container>
                <div>

                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <SectionHeading
                            heading1='My'
                            heading2='Skills'
                            peragraph='These are the technologies I use to build modern, responsive,
                            and user-friendly web applications.'
                        />
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">

                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-orange-500 duration-300">
                                <div className="flex justify-center">
                                    {skill.icon}
                                </div>

                                <h3 className="text-center text-xl font-semibold text-slate-900 py-5">
                                    {skill.name}
                                </h3>

                                <div className="w-full bg-slate-200 h-2 rounded-full">

                                    <div
                                        className="bg-orange-500 h-2 rounded-full transition-all duration-700"
                                        style={{ width: skill.level }}>
                                    </div>

                                </div>

                                <p className="text-center mt-3 text-slate-500">
                                    {skill.level}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </Container>
        </section>
    )
};
