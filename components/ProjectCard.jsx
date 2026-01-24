import Link from "next/link";
import Image from "next/image";
import propertyPulse from '@/assets/images/propertyPulse.png'
import { FiGithub } from "react-icons/fi";


const projects = [
    {
        img:propertyPulse,
        name:"PropertyPulse",
        desc:"Real estate website built with Next.js and MongoDB and a web application to help you find your next rental property.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum quas quia temporibus ipsa. Praesentium cupiditate aut deserunt molestias omnis. ",
        tags: ["Next.js", "MongoDB", "Next-Auth"],
        link:'Explore'
    },
]

const ProjectCard = () => {
    return projects.map((project,index)=>{
    return  (
        <div key={index} className="border  border-[#2F5755] rounded-lg text-white shadow-2xl bg-[#2F5755] " >
            <Image
                src={project.img}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div className="flex flex-col p-5" >
                <div className="text-xl mt-3 mb-3 font-bold" >
                    {project.name}
                </div>
                <p className="" >
                    {project.desc}
                </p>
                <div className="flex flex-wrap gap-6  mt-3 mb-3">
                    {project.tags && project.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="px-3 py-1 rounded-full text-sm text-white font-semibold border border-indigo-400  hover:from-indigo-500/40 hover:to-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 bg-[#435663] "
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center" >
                    <div>{project.link}</div>
                    <div><FiGithub size={20} /></div>
                </div>
            </div>
        </div>
    );
    })
}
 
export default ProjectCard;