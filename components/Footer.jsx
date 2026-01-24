import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#1A3636] py-4 mt-24'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        
        <div className='flex flex-wrap justify-between md:justify-start mb-4 md:mb-0'>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/Skills'>Skills</Link>
            </li>
            <li>
              <Link href='/Contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-sm text-white mt-2 md:mt-0'>
            &copy; {currentYear} MyProfile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;