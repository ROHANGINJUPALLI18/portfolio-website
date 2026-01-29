import React from 'react';

function LearningCard() {
  const data = [
    {
      year: "I-Year",
      skills: [
        "Programming Fundamentals",
        "Data Structures Basics",
        "Problem Solving",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Git",
        "GitHub",
        "Bootstrap",
        "Tailwind CSS"
      ]
    },
    {
      year: "II-Year",
      skills: [
        "React.js",
        "Redux",
        "Redux Toolkit Query",
        "TypeScript",
        "Responsive Design",
        "Basic Backend Development (MERN)",
        "REST API",
        "Firebase",
        "SQL Concepts",
        "NoSQL Concepts",
        "Clean Code Practices",
        "Mini Projects on MERN Stack"
      ]
    },
    {
      year: "III-Year",
      skills: []
    },
    {
      year: "IV-Year",
      skills: []
    }
  ];

  const requiredData = data.map((currentYear,index)=>{
    return <div className='bg-[#2B3348] opacity-60  p-5 rounded-xl shadow-md hover:-translate-y-2 
          hover:shadow-2xl 
          hover:bg-gray-100
          hover:text-black
          transition-all 
          duration-300 
          ease-in-out 
          cursor-default
          ' key={index} >
        {/* years to display */}
        <div className='text-center text-2xl font-bold text-white' >
            {currentYear.year}
        </div>
        {/* skills to display */}
        <div className='space-y-1 mt-3'>
            <ul>
                {
                    currentYear.skills.map((skill,index)=>{
                        return <li key={index} >{skill}</li>
                    })
                }
            </ul>
        </div>
    </div>
  })

  return (
    <>
        {requiredData}
    </>
  );
}

export default LearningCard;