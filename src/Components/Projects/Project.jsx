import React from 'react'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'
import { Button } from '../Button/Button'
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Evenza from '../../assets/evenza.png'
import cheffest from '../../assets/cheffest.png'
import indorePlants from '../../assets/indorePlants.png'
import shopsy from '../../assets/shopsy.png'
import exclusive from '../../assets/exclusive.png'
import ticTacToe from '../../assets/tic-tac.png'


export const Project = () => {

  const projectCard = [
    {
      id: 1,
      image: Evenza,
      imgName: "Evenza project",
      title: "Evenza – Event Management Website",
      description: "A responsive event management website where users can discover, book, and manage events seamlessly. Designed with a clean UI and optimized for a smooth user experience across all devices.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://evenza-project-react.vercel.app",
      githubLink: "https://github.com/DOLA-DOLA-AKTER/Evenza-Project-react",
    },
    {
      id: 2,
      image: shopsy,
      imgName: "Shopsy project",
      title: "Shopsy – E-commerce Website",
      description: "A modern e-commerce platform for purchasing and selling products, with a focus on user experience and seamless shopping.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://shopsy-project-react.vercel.app",
      githubLink: "https://github.com/DOLA-DOLA-AKTER/shopsy-Project-react",
    },
    {
      id: 3,
      image: indorePlants,
      imgName: "IndorePlants project",
      title: "IndorePlants – Online Plant Store",
      description: "A modern e-commerce platform for purchasing and selling plants, with a focus on user experience and sustainable practices.",
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      liveLink: "https://garden-tailwind-js.vercel.app",
      githubLink: "https://github.com/DOLA-DOLA-AKTER/Garden-tailwind-js-",
    },
    {
      id: 4,
      image: cheffest,
      imgName: "cheffest project",
      title: "Cheffest – Food Delivery E-commerce Website",
      description: "Full-featured online food ordering platform with mouth-watering design and smooth user experience.",
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      liveLink: "https://food-project-tailwind-css.vercel.app",
      githubLink: "https://github.com/DOLA-DOLA-AKTER/Food-Project-Tailwind-CSS",
    },
    {
      id: 5,
      image: exclusive,
      imgName: "Exclusive project",
      title: "Exclusive – E-commerce Website",
      description: "A modern e-commerce platform for purchasing and selling products, with a focus on user experience and seamless shopping.",
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      liveLink: "https://exclusive-react-project.vercel.app",
      githubLink: "https://github.com/DOLA-DOLA-AKTER/Exclusive-react-project",
    },
    {
      id: 6,
      image: ticTacToe,
      imgName: "Tic Tac Toe project",
      title: "Tic Tac Toe – Game",
      description: "A classic Tic Tac Toe game built with React and Tailwind CSS.",
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: "https://tic-tac-toe-2-nu.vercel.app",
      githubLink: "https://github.com/DOLA-DOLA-AKTER/tic-tac-toe-2",
    },
  ]

  return (
    <section>
      <Container>
        {/* Section Heading */}
        <div>
          <SectionHeading
            heading1="My"
            heading2="Projects"
            peragraph="Here are some of my recent projects.Each project is built with passion and attention to detail."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">

          {projectCard.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
              <div className='p-3'>
                <img
                  src={project.image}
                  alt={project.imgName}
                  className="w-full h-56 object-cover rounded-md"
                />
              </div>
              <div className="p-6 flex flex-col items-start">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 py-3 ">
                  {project.description}
                </p>
                <div className='flex items-center gap-5 pb-4 text-orange text-xs md:text-sm font-medium'>
                  {project.technologies.map((tech) => (
                    <span key={tech} className='bg-orange-50 rounded-md px-4 py-1.5 '> {tech} </span>
                  ))}
                </div>
                <div className='flex items-center gap-5'>
                  <Button className='shadow-none!'> <a href={project.liveLink} className=' flex text-center gap-2'>Live Demo <FiExternalLink className='text-2xl' /></a></Button>
                  <Button className='text-black! bg-transparent! border-2 border-gray-300 shadow-none!'> <a href={project.githubLink} className='flex text-center gap-2'>GitHub <FaGithub className='text-2xl' /></a> </Button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  )
}
