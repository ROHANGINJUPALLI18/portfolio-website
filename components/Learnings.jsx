import LearningCard from "./LearningCard"

function Learnings() {

  return (
    <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-6 ">
            <LearningCard />
        </div>
    </div>
  )
}

export default Learnings