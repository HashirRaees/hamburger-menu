'use client'
import {useState} from "react";
import {RiMenuLine} from "@remixicon/react";
    const BurgerMenu = () =>{
        const [IsOpen,setIsOpen] = useState(false)

        const toggleMenu = () => {
            setIsOpen(!IsOpen);
          };
    return(
        <>
        <nav className="bg-blue-900 h-20 w-full flex justify-between px-6 items-center">
            <h1 className="text-white text-2xl font-bold">Hash Tech</h1>
            <button className="flex items-center">
                <RiMenuLine className="w-6 h-6 absolute right-10 text-white hover:text-gray-300" onClick={toggleMenu}/>
            </button>
            <div className={`flex justify-center items-center text-black font-semibold relative top-24 right-20 bg-gray-200 text-center border-2 border-gray-400 w-52 ${IsOpen? "block" : "hidden"}`}>
                <ul className="w-52">
                    <li className="p-4 hover:bg-gray-400 cursor-pointer">Home</li>
                    <li className="p-4 hover:bg-gray-400 cursor-pointer">About</li>
                    <li className="p-4 hover:bg-gray-400 cursor-pointer">Contact</li>
                    <li className="p-4 hover:bg-gray-400 cursor-pointer">Services</li>
                </ul>
            </div>
        </nav>
        </>
      )
}
export default BurgerMenu;
