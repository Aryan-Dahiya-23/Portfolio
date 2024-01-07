import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="py-12 w-full bg-[#2d2e32]">

            <div className="flex flex-col md:flex-row m-auto px-3 py-3.5 md:px-10 justify-between max-w-[66rem] text-[#fff]">

                <span className="font-extrabold mt-auto text-center md:text-start">Copyright © {year}. All rights are reserved</span>

                <div className="flex flex-row justify-center md:justify-start text-2xl space-x-6 mt-6 md:mt-0">
                    <a
                        href="https://github.com/Aryan-Dahiya-23"
                        target={window.innerWidth > 768 ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-125"
                        >
                        <FiGithub />
                    </a>


                    <a
                        href="https://www.linkedin.com/in/aryan-dahiya-a72320249"
                        target={window.innerWidth > 768 ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-125"
                    >
                        <PiLinkedinLogoBold />
                    </a>

                    <a
                        href="https://twitter.com/aryandahiya23"
                        target={window.innerWidth > 768 ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-125"
                    >
                        <FaXTwitter />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer