import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiBulma } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaGithub, FaLinux } from "react-icons/fa";
import { SiPostman, SiEjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SkillComponent from "@/components/SkillComponent";

const SkillsPage = () => {

    const frontend = [
  {
    logo: <FaReact />,
    name: "React",
  },
  {
    logo: <FaHtml5 />,
    name: "HTML",
  },
  {
    logo: <FaCss3Alt />,
    name: "CSS",
  },
  {
    logo: <FaJs />,
    name: "JavaScript",
  },
  {
    logo: <FaBootstrap />,
    name: "Bootstrap",
  },
  {
    logo: <SiNextdotjs />,
    name: "Next.js",
  },
  {
    logo: <FaGitAlt />,
    name: "Git",
  },
  {
    logo: <SiTypescript />,
    name: "TypeScript",
  },
  {
    logo: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    logo: <SiBulma />,
    name: "Bulma",
  },
  ];
    const backend = [
  {
    logo: <FaNodeJs />,
    name: "Node.js",
  },
  {
    logo: <SiExpress />,
    name: "Express.js",
  },
  {
    logo: <FaPython />,
    name: "Python",
  },
  {
    logo: <SiNextdotjs />,
    name: "NextAuth",
  },
  {
    logo: <FaJava />,
    name: "Java",
  },
  ];
    const databases = [
  {
    logo: <SiMysql />,
    name: "MySQL",
  },
  {
    logo: <SiMongodb />,
    name: "MongoDB",
  },
  {
    logo: <SiPostgresql />,
    name: "PostgreSQL",
  },
  {
    logo: <FaDatabase />,
    name: "pgAdmin",
  },
  ];
    const others = [
  {
    logo: <VscVscode />,
    name: "Postman",
  },
  {
    logo: <SiPostman />,
    name: "Postman",
  },
  {
    logo: <FaGithub />,
    name: "GitHub",
  },
  {
    logo: <SiEjs />,
    name: "EJS",
  },
  {
    logo: <FaLinux />,
    name: "Linux Commands",
  },
  ];

    return ( <div>
        <div className="flex flex-col flex-wrap items-center px-3 mt-6" >
            <div className="text-4xl font-bold font-sans mb-2 mt-3" >
                Tech Stack
            </div>
            <div className="text-lg mb-4" >
                These are the technologies used by me for building full stack web appilications 
            </div>
        </div>
        {/* display the tech stack with images */}
        <div className="px-4">
            {/* frontend technologies */}
            <SkillComponent stack={frontend} title="Frontend" />

            {/* backend technologies */}
            <SkillComponent stack={backend} title="Backend" />
            
            {/* databases technologies */}
            <SkillComponent stack={databases} title="Database" />
            
            {/* other technologies */}
            <SkillComponent stack={others} title="Others" />
            
        </div>
    </div> );
}
 
export default SkillsPage;