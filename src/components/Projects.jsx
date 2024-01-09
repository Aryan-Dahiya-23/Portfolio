import ProjectCard from "./ProjectCard"
import Audioverse from "../assets/Audioverse.jpeg"
import Sociopedia from "../assets/Sociopedia.jpeg"

const Projects = () => {
    return (
        <section className="flex justify-center items-center py-20 lg:py-40 bg-[#f9f9f9]" id="projects">
            <div className="flex flex-col px-4 md:px-10 max-w-[90%] md:max-w-[66rem]">
              
                <p className="text-[#147efb] mb-2 font-bold">PORTFOLIO</p>
                <h3 className="text-2xl font-extrabold mb-14 text-[#2d2e32]">Each project is a unique piece of development 🧩</h3>

                <div className="grid justify-center lg:justify-normal gap-14 h-auto w-full">
                    <ProjectCard id={'audioverse'} img={Audioverse}  />
                    <ProjectCard id={'sociopedia'} img={Sociopedia}/>
                </div>

            </div>
        </section>
    )
}

export default Projects