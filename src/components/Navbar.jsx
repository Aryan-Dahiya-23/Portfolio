import { useState } from "react"

const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <nav className="flex flex-row justify-between fixed h-auto top-0 w-full py-6 px-7 lg:pt-6 lg:pb-6 lg:pl-12 lg:pr-10 z-10 shadow-md bg-[#fff]" id="navbar">

            <div className="text-[#2d2e32] text-[1.4rem] font-bold cursor-pointer">Aryan.dev</div>

            <div className="hidden font-semibold space-x-5 pr-5 text-[1.17rem] text-[#2d2e32] lg:flex">
                <a href="#home" className="flex items-center cursor-pointer hover:text-sky-500">Home</a>
                <a href="#about" className="flex items-center cursor-pointer hover:text-sky-500">About</a>
                <a href="#projects" className="flex items-center cursor-pointer hover:text-sky-500">Projects</a>
                <a href="#contact" className="flex items-center cursor-pointer hover:text-sky-500">Contact</a>
            </div>

            <button className="hover:text-blue-500 hover:bg-gray-100 lg:hidden" onClick={toggleDrawer}>
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            </button>

            <div className={`${isDrawerOpen ? "open-menu flex" : "close-menu hidden"}  justify-center items-center bg-white fixed top-0 left-0 h-full w-full `}>

                <button className="absolute top-6 right-10 hover:text-blue-500 hover:bg-gray-100" onClick={toggleDrawer}>
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </button>

                <div className="flex flex-col items-center space-y-7 text-[1.17rem] text-[#2d2e32] font-semibold">
                    <a href="#" className="cursor-pointer hover:bg-gray-100 hover:text-sky-500">Home</a>
                    <a href="#" className="cursor-pointer hover:bg-gray-100 hover:text-sky-500">About</a>
                    <a href="#" className="cursor-pointer hover:bg-gray-100 hover:text-sky-500">Projects</a>
                    <a href="#" className="cursor-pointer hover:bg-gray-100 hover:text-sky-500">Contact</a>
                </div>
            </div>

        </nav>
    )
}

export default Navbar