import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import SkillIcon from "./SkillIcon";
import HelloGif from "../assets/HelloGif.gif"

const Home = () => {

    const bio = "Hi, I'm Aryan Dahiya. A passionate Software Engineer based in India. 📍"

    const skillIconsData = [
        { src: 'https://skillicons.dev/icons?i=html,css', alt: 'HTML CSS' },
        { src: 'https://skillicons.dev/icons?i=tailwind,bootstrap', alt: 'Tailwind Bootstrap' },
        { src: 'https://skillicons.dev/icons?i=js,ts', alt: 'JavaScript TypeScript' },
        { src: 'https://skillicons.dev/icons?i=react,next', alt: 'React Next' },
        { src: 'https://skillicons.dev/icons?i=nodejs,express', alt: 'Node Express' },
        { src: 'https://skillicons.dev/icons?i=postgres,mongodb', alt: 'PostgreSQL MongoDB' },
    ];

    return (
        <section className="flex justify-center items-center h-auto lg:h-[100vh] pb-10 lg:pb-0 w-full bg-[#f9f9f9]" id="home">

            <div className="flex flex-col space-y-7 max-w-[90%] md:max-w-[66rem]">

                <div className="flex flex-col-reverse justify-center items-center space-y-reverse space-y-10 lg:space-y-0 lg:flex-row mt-28 lg:gap-24">

                    <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-5 max-w-[32rem]">

                        <div className="flex flex-row text-center lg:text-start relative">
                            <span className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2d2e32] font-bold">Full-Stack MERN Developer👋</span>
                        </div>

                        <div className="text-[#555] px-2 lg:px-0 text-center lg:text-start md:text-lg font-[Mulish,sans-serif] font-medium leading-relaxed">
                            {bio}
                        </div>

                        <div className="flex flex-row space-x-5 text-3xl text-black">
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
                            src={HelloGif}
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

                            {skillIconsData.map((icon, index) => (
                                <SkillIcon key={index} src={icon.src} alt={icon.alt} />
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Home