'use client'
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {CiMenuBurger} from 'react-icons/ci'
import  { IoCodeSharp } from "react-icons/io5";

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)
  const [navItemClick , setNavItemClick] = useState("/");

  const highLightLink = (path) =>
    `px-4 py-3 border-t-2 transition-all duration-200 ${
      pathname === path
        ? "border-blue-500 text-blue-600"
        : "border-transparent text-gray-600 hover:text-black"
    }`;

  const handleNavItemClick = ()=>{
    
  }

  const menuRef = useRef(null);

  const handleIsOpenClick = ()=>{
    setIsOpen((prev)=>{
      return !prev  
    })
  }

  const closeMenu = () => {
    setIsOpen(false);
  };

   useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); 

    return (
      <nav className="bg-[#222831]">
        {/* the downward div is for the creation of the height of the navbar with bg-color */}
        <div className="h-16 items-center flex justify-around " >
          {/* logo section */}
          <div className=" text-2xl flex gap-2 items-center  font-bold text-white px-4 ">
            <span className="bg-blue-500 p-1 rounded-sm" >{IoCodeSharp()}</span>
            Rohan 
            <span className="text-[#6E85B2]" >Ginupalli</span>
          </div>
          {/* links desktop */}
          <div className="hidden sm:block" >
            <Link href='/' className="text-gray-100  text-md px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >About Me</Link>
            <Link href='/Experience' className="text-gray-100 text-md px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >Experience</Link>
            <Link href='/Skills' className="text-gray-100 text-md px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >Skills</Link>
            <Link href='/Projects' className="text-gray-100 text-md px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >Projects</Link>
            <Link href='/Contact' className="text-gray-100 text-md px-4 hover:bg-black hover:text-white hover:rounded-2xl hover:py-2" >Contact</Link>
          </div>
          <CiMenuBurger onClick={handleIsOpenClick} className="block sm:hidden text-3xl text-white" />
        </div>
        {/* mobile buttons/links */}
        <div  ref={menuRef} className={`${isOpen?"block":"hidden"} sm:hidden space-y-2 pb-3 rounded-2xl border border-black/30 shadow-lg bg-[#40534C] `} >
            <Link href='/' onClick={()=>closeMenu()} className="text-gray-600 text-lg px-4 block" >About Me</Link>
            <Link href='/Experience'  onClick={()=>closeMenu()} className="text-gray-600 text-lg px-4 block" >Experience</Link>
            <Link href='/Skills'  onClick={()=>closeMenu()} className="text-gray-600 text-lg px-4 block" >Skills</Link>
            <Link href='/Projects'  onClick={()=>closeMenu()} className="text-gray-600 text-lg px-4 block" >Projects</Link>
            <Link  href='/Contact'  onClick={()=>closeMenu()} className="text-gray-600 text-lg px-4 block" >Contact</Link>
          </div>
      </nav>
    );
}

export default Navbar;