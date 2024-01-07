import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import profileImage from "../assets/profile.jpeg"

const Home = () => {

    const bio = "Hi, I'm Aryan Dahiya. A passionate Full-stack MERN Developer based in India. 📍"

    // const imgSrc = "https://user-images.githubusercontent.com/74038190/290078797-bea7769e-cd87-495f-ad0e-04ddfbb73091.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTkxNTksIm5iZiI6MTcwNDYxODg1OSwicGF0aCI6Ii83NDAzODE5MC8yOTAwNzg3OTctYmVhNzc2OWUtY2Q4Ny00OTVmLWFkMGUtMDRkZGZiYjczMDkxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA5MTQxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTYxZjU5ZWRiOGQ4YWM3NDRmYWFmNTkzZDYxZjQ1NWVmNGZlZmIwNGNkMzViMmY3MGIwNzc3NWM5ZmRkZmE5NDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dHo9jql1irTrZDTayNggNVC_gx50Dilx21l0lT5-ahQ"

    return (
        <section className="flex justify-center items-center h-auto lg:h-[100vh] w-full bg-[#f9f9f9]" id="home">

            <div className="flex flex-col space-y-7 max-w-[90%] md:max-w-[60rem]">

                <div className="flex flex-col-reverse justify-center items-center space-y-reverse space-y-10 lg:space-y-0 lg:flex-row mt-28 lg:gap-10">

                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-5 max-w-[32rem]">

                        <div className="flex flex-row text-center lg:text-start relative">
                            <span className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2d2e32] font-bold">Full-Stack MERN Developer👋</span>
                        </div>

                        <div className="text-[#555] px-2 lg:px-0 text-center lg:text-start md:text-lg font-[Mulish,sans-serif] font-medium leading-relaxed">
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

                <div className="py-10 lg:py-14 lg:relative max-w-[32rem] lg:max-w-full">

                    <div className="lg:absolute flex flex-col justify-center items-center lg:justify-start space-y-6 lg:space-y-0 lg:flex-row w-full bottom-0">

                        <div className="flex justify-center items-center lg:pr-8">
                            <p className="text-[#2d2e32] font-[Mulish,sans-serif] min-w-max font-semibold py-2 lg:py-0 lg:pr-2 border-b-2 border-b-gray-500 lg:border-r-2 lg:border-r-gray-500 lg:border-b-0">Tech Stack</p>
                        </div>

                       
                        <div className="flex flex-wrap gap-12 md:gap-16 justify-center items-center lg:flex-nowrap lg:justify-start lg:items-start lg:gap-0 lg:space-y-0 lg:flex-row lg:space-x-7">

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