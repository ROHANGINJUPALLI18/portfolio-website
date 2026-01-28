'use client'
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {CiMenuBurger} from 'react-icons/ci'
import  { IoCodeSharp } from "react-icons/io5";
import { signIn,signOut,getProviders,useSession } from "next-auth/react";
import {FaGoogle} from 'react-icons/fa'
import Image from "next/image";
import profileDefault from '@/assets/images/profile.jpg'

const Navbar = () => {

  const { data: session } = useSession();
  const profileImage = session?.user?.image || null;

  const [isOpen,setIsOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers,setProviders] = useState(null) 
  const pathname = usePathname();

  const handleNavItemClick = (path)=>{
    return `text-gray-100 text-md px-4 tracking-wide py-2 ${pathname === path && "border-t-2 border-indigo-500"}`
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

  useEffect(()=>{
    const setAuthProviders = async ()=> {
      const res = await getProviders();
      setProviders(res)
    } 
    setAuthProviders()
  },[])




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
            <Link href='/' className={handleNavItemClick("/")} >About</Link>
            <Link href='/Experience' className={handleNavItemClick("/Experience")} >Experience</Link>
            <Link href='/Skills' className={handleNavItemClick("/Skills")} >Skills</Link>
            <Link href='/Projects' className={handleNavItemClick("/Projects")} >Projects</Link>
            <Link href='/Contact' className={handleNavItemClick("/Contact")} >Contact</Link>
          </div>
            <div>
              {!session && (
                <div className='hidden md:block'>
                  <div className='flex items-center'>
                    {providers &&
                      Object.values(providers).map((provider) => (
                        <button
                          key={provider.name}
                          onClick={() => signIn(provider.id)}
                          className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-3'
                        >
                          <FaGoogle className='text-white mr-2' />
                          <span>Login - To Connect</span>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              {session && (
                  <div>
                  <button
                    type='button'
                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='h-8 w-8 rounded-full'
                      src={profileImage || profileDefault}
                      width={40}
                      height={40}
                      alt=''
                    />
                  </button>
                </div>
              )}
            </div>

          <CiMenuBurger onClick={handleIsOpenClick} className="block sm:hidden text-3xl text-white" />
        </div>
        {/* mobile buttons/links */}
        <div  ref={menuRef} className={`${isOpen?"block":"hidden"} sm:hidden space-y-2 pb-3 rounded-2xl border border-black/30 shadow-lg bg-[#40534C] p-2 `} >
            <Link href='/' onClick={()=>closeMenu()} className="text-white-600 text-lg px-4 block" >About Me</Link>
            <Link href='/Experience'  onClick={()=>closeMenu()} className="text-white-600 text-lg px-4 block" >Experience</Link>
            <Link href='/Skills'  onClick={()=>closeMenu()} className="text-white-600 text-lg px-4 block" >Skills</Link>
            <Link href='/Projects'  onClick={()=>closeMenu()} className="text-white-600 text-lg px-4 block" >Projects</Link>
            <Link  href='/Contact'  onClick={()=>closeMenu()} className="text-white-600 text-lg px-4 block" >Contact</Link>
          </div>
      </nav>
    );
}

export default Navbar;