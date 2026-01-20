import LearningCard from "./LearningCard"

function Learnings() {

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
            <LearningCard />
        </div>
    </div>
  )
}

export default Learnings