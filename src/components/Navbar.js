import {HiOutlineMenu, HiOutlineX} from "react-icons/hi"
import {useState} from "react";

export const Navbar = () => {

    const [showNav, setShowNav] = useState(false)

    const handleClick = () => {
        setShowNav(!showNav)
    }

    return (
        <div className="fixed w-screen bg-[#000300] z-10">
            <div className="flex justify-between max-w-[1200px] h-24 mx-auto inset-x-0 items-center p-4
                            text-white">
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">JessTech</h1>

                <ul className="hidden md:flex uppercase">
                    <li className="p-4 cursor-pointer hover:text-gray-400 duration-100">Home</li>
                    <li className="p-4 cursor-pointer hover:text-gray-400 duration-100" >About</li>
                    <li className="p-4 cursor-pointer hover:text-gray-400 duration-100">Services</li>
                    <li className="p-4 cursor-pointer hover:text-gray-400 duration-100">Contact</li>
                </ul>
                <div onClick={handleClick} className="cursor-pointer md:hidden">
                    {!showNav ? <HiOutlineMenu size={28}/> :
                        <HiOutlineX size={28}/>}
                </div>
                <div
                    className={showNav ? "fixed top-0 left-0 w-[60%] h-screen border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500" :
                        "fixed top-0 left-[-100%] w-1/2 h-screen border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500"}>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] mt-8 ml-4">JessTech</h1>

                    <ul className="flex flex-col mt-24 uppercase">
                        <li className="p-4 border-b border-b-gray-800">Home</li>
                        <li className="p-4 border-b border-b-gray-800">About</li>
                        <li className="p-4 border-b border-b-gray-800">Services</li>
                        <li className="p-4 bg-[#000300]">Contact</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}