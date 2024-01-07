import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import profileImage from "../assets/profile.jpeg"

const Home = () => {

    const bio = "Hi, I'm Aryan Dahiya. A passionate Full-stack MERN Developer based in India. 📍"

    return (
        <section className="flex justify-center items-center h-auto lg:h-[100vh] w-full bg-[#f9f9f9]">

            <div className="flex flex-col space-y-7 w-[90%] md:w-[70%] lg:max-w-[60%]">

                <div className="flex flex-col-reverse justify-center items-center space-y-reverse space-y-10 lg:space-y-0 lg:flex-row mt-28 ">

                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-5 lg:max-w-[60%]">

                        <div className="flex flex-row text-center lg:text-start relative">
                            <span className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2d2e32] font-bold">Full-Stack MERN Developer👋</span>
                            {/* <img
                                src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png"
                                className="absolute right-11 bottom-1 md:right-28 md:bottom-0.5 lg:right-44 lg:bottom-0 h-10 w-10 lg:h-14 lg:w-14"
                                alt="hello"
                            /> */}
                        </div>

                        <div className="text-[#555] text-center lg:text-start md:text-lg font-[Mulish,sans-serif] font-medium leading-relaxed">
                            {bio}
                        </div>

                        <div className="flex flex-row space-x-5 text-3xl">
                            <a
                                href="https://github.com/Aryan-Dahiya-23"
                                target={window.innerWidth > 768 ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="hover:text-sky-500"
                            >
                                <FiGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aryan-dahiya-a72320249"
                                target={window.innerWidth > 768 ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="hover:text-sky-500"
                            >
                                <PiLinkedinLogoBold />
                            </a>

                            <a
                                href="https://twitter.com/aryandahiya23"
                                target={window.innerWidth > 768 ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="hover:text-sky-500"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center lg:ml-auto">

                        <img
                            src={profileImage}
                            alt="profile"
                            className="h-80 w-80 rounded-full object-cover object-top"
                        />

                    </div>
                </div>

                <div className="py-10 lg:py-14 lg:relative">

                    <div className="lg:absolute flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-6 lg:space-y-0 lg:flex-row w-full bottom-0">

                        <div className="flex justify-center items-center pr-8">
                            <p className="text-[#2d2e32] font-[Mulish,sans-serif]  font-semibold py-2 lg:py-0 lg:px-2 border-b-2 border-b-gray-500 lg:border-r-2 lg:border-r-gray-500 lg:border-b-0">Tech Stack</p>
                        </div>

                        <div className="flex flex-wrap gap-12 md:gap-16 justify-center items-center lg:flex-nowrap lg:justify-start lg:items-start lg:gap-0 lg:space-y-0 lg:flex-row lg:space-x-10">

                            <div className="img-container">
                                <img
                                    src="https://skillicons.dev/icons?i=html,css"
                                    alt="html css"
                                    className="cursor-pointer"
                                />
                            </div>

                            <div className="img-container">
                                <img
                                    src="https://skillicons.dev/icons?i=tailwind,bootstrap"
                                    alt="tailwind bootstrap"
                                    className="cursor-pointer"
                                />
                            </div>

                            <div className="img-container">

                                <img
                                    src="https://skillicons.dev/icons?i=js,ts"
                                    alt="JS TS"
                                    className="cursor-pointer"
                                />
                            </div>

                            <div className="img-container">

                                <img
                                    src="https://skillicons.dev/icons?i=react,next"
                                    alt="react next"
                                    className="cursor-pointer"
                                />
                            </div>

                            <div className="img-container">

                                <img
                                    src="https://skillicons.dev/icons?i=nodejs,express"
                                    alt="node express"
                                    className="cursor-pointer"
                                />
                            </div>

                            <div className="img-container">

                                <img
                                    src="https://skillicons.dev/icons?i=postgres,mongodb"
                                    alt=""
                                    className="cursor-pointer"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Home