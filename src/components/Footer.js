import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter} from "react-icons/fa";

export const Footer = () => {

    return (
        <div className="w-full bg-[#000300]">

            <div className="max-w-[1300px] mx-auto grid md:grid-cols-3 py-12 px-12 ">
                <div className="w-full flex flex-col md:items-start items-center md:text-left text-center">
                    <h1 className="w-full text-3xl font-bold text-[#00df9a]">JessTech</h1>
                    <p className="text-white mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex flex-row items-center">
                        <FaFacebookF size={26} className="text-white mt-4 cursor-pointer"/>
                        <FaTwitter size={28} className="text-white mt-4 ml-4 cursor-pointer"/>
                        <FaInstagram size={30} className="text-white mt-4 ml-4 cursor-pointer"/>
                        <FaLinkedinIn size={30} className="text-white mt-4 ml-4 cursor-pointer"/>
                    </div>
                </div>
                <div className="w-full text-white mt-12 md:col-span-2 flex justify-around">
                    <div>
                        <h2 className="text-md md:text-lg font-bold text-gray-500">Solutions</h2>
                        <ul className="text-sm md:text-md text-gray-400 font-medium">
                            <li className="py-1">Cloud</li>
                            <li className="py-1">Analytics</li>
                            <li className="py-1">AI</li>
                            <li className="py-1">Performance</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-md md:text-lg font-bold text-gray-500">Support</h2>
                        <ul className="text-sm md:text-md text-gray-400 font-medium">
                            <li className="py-1">Contact</li>
                            <li className="py-1">FAQ</li>
                            <li className="py-1">Chat</li>
                            <li className="py-1">Press</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}