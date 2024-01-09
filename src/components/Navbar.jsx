import { useEffect } from "react"

const Navbar = () => {

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    const uncheckCheckbox = () => {
        const checkbox = document.getElementById("my-drawer")

        if (checkbox !== null) {
            checkbox.checked = false;
        }
    }

    return (
        <nav className="flex flex-row justify-between fixed h-auto top-0 w-full py-6 px-7 lg:pt-6 lg:pb-6 lg:pl-12 lg:pr-10 z-10 shadow-md bg-[#fff]" id="navbar">

            <a href="#home" className="text-[#2d2e32] text-[1.4rem] hover:text-sky-500 font-extrabold">Aryan.dev</a>

            <div className="hidden font-semibold space-x-5 pr-5 text-[1.17rem] text-[#2d2e32] lg:flex">
                <a href="#home" className="flex items-center  hover:text-sky-500">Home</a>
                <a href="#about" className="flex items-center  hover:text-sky-500">About</a>
                <a href="#projects" className="flex items-center  hover:text-sky-500">Projects</a>
                <a href="#contact" className="flex items-center  hover:text-sky-500">Contact</a>
            </div>


            {/* Small Screens Menu Drawer */}
            <div className="drawer w-auto lg:hidden">

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="hover:text-blue-500 hover:bg-gray-100 text-[#2d2e32]">
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </label>
                </div>

                <div className="drawer-side">

                    <div className="flex justify-center items-center bg-white fixed top-0 left-0 h-full w-full">

                        <button className="absolute top-6 right-7 hover:text-blue-500 hover:bg-gray-100 text-[#2d2e32]" onClick={uncheckCheckbox}>
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        </button>

                        <div className="flex flex-col items-center space-y-10 text-2xl text-[#2d2e32] font-bold">
                            <a href="#home" className="cursor-pointer hover:bg-gray-100 hover:text-sky-500" onClick={() => uncheckCheckbox(false)}>Home</a>
                            <a href="#about" className="cursor-pointer hover:bg-gray-100 hover:text-sky-500" onClick={() => uncheckCheckbox(false)}>About</a>
                            <a href="#projects" className="cursor-pointer hover:bg-gray-100 hover:text-sky-500" onClick={() => uncheckCheckbox(false)}>Projects</a>
                            <a href="#contact" className="cursor-pointer hover:bg-gray-100 hover:text-sky-500" onClick={() => uncheckCheckbox(false)}>Contact</a>
                        </div>
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default Navbar