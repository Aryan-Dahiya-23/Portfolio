import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { FiGithub } from "react-icons/fi";
import { GrShare } from "react-icons/gr";

const ProjectCard = ({ id, img, title, duration, icon, description, githubLink, liveLink }) => {

    const [isInView, setInView] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById(id);

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setInView(true);
                    }, 1500)
                } else {
                    setInView(false);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(targetElement);

        return () => observer.disconnect();
    }, [id]);

    return (
        <div className={`flex flex-col ${id === 'sociopedia' ? 'lg:flex-row-reverse' : 'lg:flex-row'}  min-w-full md:max-w-min lg:w-auto items-center lg:items-stretch  max-h-[47.5rem] md:max-h-[47.5rem] lg:max-h-[25rem] gap-12 lg:gap-20 p-5 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-[#fff]`}>

            <div className={`image-container ${ id !== 'nexus' && (isInView ? 'in-view' : 'reset')}`} id={id}>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <img
                        src={img}
                        alt="project image"
                        className={`w-full ${id === 'nexus' ? 'h-full' : 'h-auto' } ${ id !== 'nexus' && (isInView ? 'animate' : 'reset')}`}
                    />
                </a>
            </div>

            <div className="flex flex-col w-[20rem] h-auto lg:pt-2">

                <h3 className="flex justify-center items-center mb-4 lg:mb-3 font-extrabold text-[#2d2e32]">{title}
                    <span className="ml-1.5 mr-1.5 text-[0.75rem] text-[hsla(0,5%,8%,.773)]">{duration}</span>
                    {icon}
                </h3>

                <p className="mb-4 lg:mb-4 text-center font-semibold text-[#767676]">{description}</p>

                {title === 'AUDIOVERSE' ?

                    <div className="flex flex-wrap justify-center items-center mb-7 lg:mb-0 gap-4 text-sm">
                        <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-blue-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-blue-500 font-[Mulish,sans-serif]">React JS</p>
                        <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-green-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-green-500 font-[Mulish,sans-serif]">Node JS</p>
                        <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-violet-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-violet-500 font-[Mulish,sans-serif]">Stripe</p>
                        <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-green-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-green-500 font-[Mulish,sans-serif]">MongoDB</p>
                        <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-yellow-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-yellow-500 font-[Mulish,sans-serif]">JWT</p>
                    </div>
                    :
                    title === 'SOCIOPEDIA' ?
                        <div className="flex flex-wrap justify-center items-center mb-7 lg:mb-0 gap-4 text-sm">
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-blue-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-blue-500 font-[Mulish,sans-serif]">React JS</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-green-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-green-500 font-[Mulish,sans-serif]">Node JS</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-yellow-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-yellow-500 font-[Mulish,sans-serif]">JWT</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-violet-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-violet-500 font-[Mulish,sans-serif]">Tailwind CSS</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-green-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-green-500 font-[Mulish,sans-serif]">MongoDB</p>
                        </div>
                        :
                        <div className="flex flex-wrap justify-center items-center mb-7 lg:mb-8 gap-4 text-sm">
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-blue-500 bg-[#fff] px-2 py-2 rounded-md border-2 border-blue-500 font-[Mulish,sans-serif]">React JS</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-yellow-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-yellow-500 font-[Mulish,sans-serif]">Socket IO</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-violet-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-violet-500 font-[Mulish,sans-serif]">Passport JS</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-green-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-green-500 font-[Mulish,sans-serif]">Node JS</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-red-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-red-500 font-[Mulish,sans-serif]">WEB RTC</p>
                            <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-blue-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-blue-500 font-[Mulish,sans-serif]">React Query</p>
                        </div>
                }
                <div className="flex flex-row justify-center items-center gap-10 mt-auto lg:pb-1 font-semibold ">

                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#2d2e32] hover:text-[#147efb]"
                    >
                        Code
                        <FiGithub
                            className="text-xl"
                        />
                    </a>

                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#2d2e32] hover:text-[#147efb] "
                    >
                        Live Demo
                        <GrShare
                            className="text-xl"
                        />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard

ProjectCard.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
};