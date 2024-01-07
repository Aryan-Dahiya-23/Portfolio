import { TbMapSearch } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {

    const text = "Don't be shy! Hit me up! 👇"

    return (
        <div className="flex justify-center items-center w-full py-20 lg:py-28 bg-[#fff]" id="contact">

            <div className="flex flex-col space-y-14 max-w-[66rem] w-full px-4 md:px-10">

                <div className="flex flex-col space-y-2 w-full">

                    <span className="font-bold text-[#147efb] w-full text-2xl text-center md:text-start">Contact</span>
                    <p className="font-extrabold text-2xl text-[#2d2e32] w-full text-center md:text-start">{text}</p>

                </div>

                <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-20">

                    <div className="flex flex-col justify-center items-center space-y-1 md:space-y-0 md:flex-row gap-2">

                        <div className="md:pr-2">
                            <div className="p-2 shadow rounded-full text-4xl text-[#147efb]">
                                <TbMapSearch />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <span className="text-center md:text-start font-extrabold text-[#2d2e32]">Location</span>
                            <span className="cursor-pointer hover:text-[#147efb] text-[#767676]">New Delhi, India</span>
                        </div>
                    </div>


                    <div className="flex flex-col justify-center items-center space-y-1 md:space-y-0 md:flex-row gap-2">

                        <div className="md:pr-2">
                            <div className="p-2 shadow rounded-full text-4xl text-[#147efb]">
                                <a href="mailto:aryan23dahiya@gmail.com"> <MdMailOutline /> </a>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <span className="text-center md:text-start font-extrabold text-[#2d2e32]">Mail</span>
                            <a href="mailto:aryan23dahiya@gmail.com" className="cursor-pointer hover:text-[#147efb] text-[#767676]">aryan23dahiya@gmail.com</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact