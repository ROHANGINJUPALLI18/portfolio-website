import Image from "next/image"
import profileImage from '@/assets/images/profile.jpg'
function Hero() {
  return (
    <section className=' py-16 mb-10'>
      <div className="flex justify-between items-center mx-10" >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
          <div >
            <h1 className=' font-bold text-white '>
              <div className=" flex flex-col flex-wrap items-start border-l-4" >
                <div className="pl-4 text-6xl mb-3 " >
                Rohan Ginjupalli
                </div>
                <div className="pl-4 text-5xl mb-3 font-bold text-[#2666CF]" >
                  Full Stack
                </div>
                <div className="pl-4 text-5xl mb-3 text-[#577BC1] " >
                  Developer
                </div>
                <div className="pl-4 font-medium max-w-xl text-xl text-left " >
                  Second year IT student building scalable applications . Currently working on projects with Next.js, React, Database & TypeScript.
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div className="hidden lg:block" >
          <Image
            src={profileImage}
            alt="Profile picture"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero