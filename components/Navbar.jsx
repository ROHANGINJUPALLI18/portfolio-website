'use client'
import { useState } from "react";
import Link from "next/link";
import {CiMenuBurger} from 'react-icons/ci'
const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)

  const handleIsOpenClick = ()=>{
    setIsOpen((prev)=>{
      return !prev  
    })
  }

    return (
      <nav className="bg-yellow-400">
        {/* the downward div is for the creation of the height of the navbar with bg-color */}
        <div className="h-16 items-center flex justify-between " >
          {/* logo section */}
          <div className=" text-2xl text-white px-4 font-bold">Let's Connect</div>
          {/* links desktop */}
          <div className="hidden sm:block" >
            <Link href='#' className="text-gray-100 font-semibold text-lg px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >About Me</Link>
            <Link href='#' className="text-gray-100 font-semibold text-lg px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >Experience</Link>
            <Link href='#' className="text-gray-100 font-semibold text-lg px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >Skills</Link>
            <Link href='#' className="text-gray-100 font-semibold text-lg px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >Projects</Link>
            <Link href='#' className="text-gray-100 font-semibold text-lg px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >Contact</Link>
          </div>
          <CiMenuBurger onClick={handleIsOpenClick} className="block sm:hidden text-3xl text-white" />
        </div>
        {/* mobile buttons/links */}
        <div className={`${isOpen?"block":"hidden"} sm:hidden bg-gray-200 space-y-2 pb-3 hover:bg-black hover:text-white `} >
            <Link href='#' className="text-gray-600 text-lg px-4 block" >About Me</Link>
            <Link href='#' className="text-gray-600 text-lg px-4 block" >Experience</Link>
            <Link href='#' className="text-gray-600 text-lg px-4 block" >Skills</Link>
            <Link href='#' className="text-gray-600 text-lg px-4 block" >Projects</Link>
            <Link href='#' className="text-gray-600 text-lg px-4 block" >Contact</Link>
          </div>
      </nav>
    );
}

export default Navbar;