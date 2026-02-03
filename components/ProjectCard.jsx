import Link from "next/link";
import Image from "next/image";
import propertyPulse from "@/assets/images/propertyPulse.png";
import checkInAndOut from "@/assets/images/checkInAndOut.png";
import bill from "@/assets/images/bill.png";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    img: bill,
    name: "Bill-Management",
    desc: "Experienced single-page application for managing personal and small-business bills. Built with modern TypeScript and React tooling, the app integrates Firebase for secure authentication and per-user data persistence. It delivers authenticated CRUD operations, a responsive user interface, notification toasts, and fast local development using Vite. ",
    tags: [
      "ReactTs",
      "Firebase",
      "Fire-store",
      "Redux Toolkit",
      "Firebase Authentication",
    ],
    link: "https://non-prod-bill.web.app/",
  },
  {
    img: checkInAndOut,
    name: "Check-in & Check-out",
    desc: "A single-page application built with React.js for tracking employee or visitor attendance. It integrates Google Sheets API for data storage and context API for state management, with Node.js and Express.js backend services. The application provides authenticated CRUD operations, a responsive user interface, and real-time notifications. ",
    tags: ["React.js", "GoogleSheetsApi", "Context-Api", "NodeJs", "ExpressJs"],
    link: "https://check-in-check-out-nine.vercel.app/login",
  },
  {
    img: propertyPulse,
    name: "PropertyPulse",
    desc: "Real estate website built with Next.js and MongoDB, a web application to help you find your next rental property.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum quas quia temporibus ipsa. Praesentium cupiditate aut deserunt molestias omnis. ",
    tags: ["Next.js", "MongoDB", "Next-Auth","AtlasDB","Cloudinary"],
    link: "Explore",
  },
];

const ProjectCard = () => {
  return projects.map((project, index) => {
    return (
      <div className="border border-blue-950 rounded-xl text-white shadow-2xl bg-[#090C1D] overflow-hidden">
        {/* Image Section */}
        <div className="relative h-48 w-full">
          <Link href={project.link}>
            <Image
              src={project.img}
              fill
              alt={project.name}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Content Section */}
        <div className="flex flex-col p-6 gap-3">
          {/* Title */}
          <h3 className="text-xl font-semibold tracking-wide">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/70 leading-relaxed">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium 
                        bg-indigo-500/10 text-indigo-300 
                        border border-indigo-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4">
            <Link
              href={project.link}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition"
              target="_blank"
            >
              View Project ↗
            </Link>

            <FiGithub
              size={20}
              className="text-white/60 hover:text-white transition cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  });
};

export default ProjectCard;
