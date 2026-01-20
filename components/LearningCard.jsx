function LearningCard() {
    const data = [
        {
            year:'I-Year',
            desc:'Programming fundamentals , Data structures basics, Problem-solving and logical thinking, HTML5 and CSS3 fundamentals,JavaScript (ES6 concepts), Git and GitHub, Bootstrap , Command line and basic Linux usage'
        },
        {
            year:'II-Year',
            desc:'React.js ,Redux ,Redux Toolkit Query ,TypeScript Tailwind CSS and responsive design, Basic backend development(MERN), REST API, Firebase , SQL and NoSQL concepts, Project structuring and clean code practices. Started doing mini projects on MERN'
        },
        {
            year:'III-Year',
            desc:'Will focus on mastering Data Structures and Algorithms, competitive programming, and building advanced full-stack applications , Building AI-Based appilications'
        },
        {
            year:'IV-Year',
            desc:'System design, scalable systems, production-level projects, and placement readiness.'
        },

    ]

    const requiredData = data.map((currentYear, index)=>{
        return <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-xl inline p-1 rounded-3xl bg-yellow-300 font-bold text-blue-600 mb-3">
                {currentYear.year}
            </div>
            <div className="text-gray-700 mt-3">
                {currentYear.desc}
            </div>
        </div>
    })

  return (
    <>
        {requiredData}
    </>
  )
}

export default LearningCard