import ProjectCard from "@/components/ProjectCard"

function page() {
  return (
    <div className="py-4 px-4" >
      <div className="flex flex-col space-y-2 items-center text-white " >
        <div className="text-3xl font-extrabold " >
          My Projects
        </div>
        <div className="text-xl" >
          Explore all my frontend and backend projects
        </div>
      </div>
      {/* project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 p-2 h-full">
        <ProjectCard />
      </div>
    </div>
  )
}

export default page