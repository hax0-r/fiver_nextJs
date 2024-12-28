import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa";

const Header = () => {
    return (
        <div className="">
            <div className=" bg-[#000000]">
                <div className="max-w-7xl flex items-center md:flex-row flex-col md:justify-between justify-center gap-3 w-full mx-auto p-4">
                    <div className="flex items-center font-medium gap-6">
                        <a href="tel:07071354784" className="text-white">Phone: 07071354784</a>
                        {/* <div className=""></div> */}
                    </div>

                    <div className="text-lg text-zinc-300  flex items-center gap-4">
                        <FaPinterest className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaLinkedinIn className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaGooglePlusG className=" cursor-pointer transition-all duration-500 hover:text-white text-2xl" />
                        <FaFacebookF className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaTwitter className=" cursor-pointer transition-all duration-500 hover:text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header