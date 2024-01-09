import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { FiGithub } from "react-icons/fi";
import { GrShare } from "react-icons/gr";

const ProjectCard = ({ id, img }) => {

    const [isInView, setInView] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById(id);

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log('Element is in view');
                    setTimeout(() => {
                        setInView(true);
                    }, 1500)
                } else {
                    console.log('Element is out of view');
                    setInView(false);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(targetElement);

        return () => observer.disconnect();
    }, [id]);

    const description = "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."

    return (
        <div className="flex flex-col w-auto md:max-w-min lg:w-auto items-center lg:items-stretch lg:flex-row max-h-[47.5rem] md:max-h-[47.5rem] lg:max-h-[25rem] gap-12 lg:gap-20 p-5 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-[#fff]">

            <div className={`image-container ${isInView ? 'in-view' : 'reset'}`} id={id}>
                <a href="https://ecommerce-deploy-lft5.vercel.app" target="_blank" rel="noopener noreferrer">
                    <img
                        src={img}
                        alt="project image"
                        className={`animated-image ${isInView ? 'animate' : 'reset'}`}
                    />
                </a>
            </div>

            <div className="flex flex-col w-[18.5rem] h-auto lg:pt-2">

                <h3 className="flex justify-center items-center mb-4 lg:mb-3 font-extrabold text-[#2d2e32]">AUDIOVERSE
                    <span className="ml-1.5 mr-1.5 text-[0.75rem] text-[hsla(0,5%,8%,.773)]">(MAY-JUNE 2023)</span>
                    🛒
                </h3>

                <p className="mb-4 lg:mb-4 text-center font-semibold text-[#767676]">{description}</p>

                <div className="flex flex-wrap justify-center items-center mb-7 lg:mb-0 gap-4 text-sm">
                    <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-blue-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-blue-500 font-[Mulish,sans-serif]">React JS</p>
                    <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-green-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-green-500 font-[Mulish,sans-serif]">Node JS</p>
                    <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-violet-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-violet-500 font-[Mulish,sans-serif]">Stripe</p>
                    <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-green-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-green-500 font-[Mulish,sans-serif]">MongoDB</p>
                    <p className="text-[#000] font-semibold shadow-[0_0_7px_rgba(0,0,0,0.1)] shadow-yellow-500 bg-[#fff] px-2.5 py-2 rounded-md border-2 border-yellow-500 font-[Mulish,sans-serif]">JWT</p>
                </div>

                <div className="flex flex-row justify-center items-center gap-10 mt-auto lg:pb-1 font-semibold ">

                    <a
                        href=""
                        className="flex items-center gap-1.5 text-[#2d2e32] hover:text-[#147efb]"
                    >
                        Code
                        <FiGithub
                            className="text-xl"
                        />
                    </a>

                    <a
                        href=""
                        className="flex items-center gap-1.5 text-[#2d2e32] hover:text-[#147efb]"
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
};