import ProjectCard from "./ProjectCard"
import Audioverse from "../assets/Audioverse.jpeg"
import Sociopedia from "../assets/Sociopedia.jpeg"
import Nexus from "../assets/Nexus.png"

const Projects = () => {

    const audioverseDescription = "Audioverse is a sleek eCommerce app for seamless, stylish shopping. Diverse products, personalized recommendations, and secure transactions redefine the online retail experience"
  
    const sociopediaDescription = "Developed a vibrant social media app that connects users seamlessly. Share moments, connect with friends, and stay updated. Experience a dynamic platform fostering communication and community engagement."
  
    const nexusDescription = "Nexus is a dynamic chat app with seamless video calls. Connect effortlessly, share messages, images and videos, and elevate conversations in real-time. Redefine communication with this user-friendly platform."
  
    return (
        <section className="flex justify-center items-center py-20 lg:py-40 bg-[#f9f9f9]" id="projects">
            <div className="flex flex-col px-4 md:px-10 min-w-[90%] md:max-w-[66rem] md:min-w-max">

                <p className="text-center mb-2 font-bold text-[#147efb]">PORTFOLIO</p>
                <h3 className="text-2xl text-center font-extrabold mb-14 text-[#2d2e32]">Each project is a unique piece of development 🧩</h3>

                <div className="grid justify-center lg:justify-normal gap-14 h-auto min-w-full">
                    <ProjectCard
                        id='audioverse'
                        img={Audioverse}
                        title="AUDIOVERSE"
                        duration="(MAY-JUNE 2023)"
                        icon="🛒"
                        description={audioverseDescription}
                        githubLink="https://github.com/Aryan-Dahiya-23/Audioverse"
                        liveLink="https://ecommerce-deploy-lft5.vercel.app"
                    />

                    <ProjectCard
                        id='sociopedia'
                        img={Sociopedia}
                        title="SOCIOPEDIA"
                        duration="(AUG-SEPT 2023)"
                        icon="🌐"
                        description={sociopediaDescription}
                        githubLink="https://github.com/Aryan-Dahiya-23/sociopedia-frontend"
                        liveLink="https://sociopedia-aryan.vercel.app"
                    />

                    <ProjectCard
                        id='nexus'
                        img={Nexus}
                        title="NEXUS"
                        duration="(NOV-DEC 2023)"
                        icon="💬"
                        description={nexusDescription}
                        githubLink="https://github.com/Aryan-Dahiya-23/nexus-frontend"
                        liveLink="https://nexus-aryan.vercel.app"
                    />
                </div>

            </div>
        </section>
    )
}

export default Projects