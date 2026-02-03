import React from 'react';

function LearningCard() {
  const data = [
    {
      year: "1st-Year",
      skills: [
        "Web Fundementals",
        "Programming Basics",
        "Html , Css , Js",
        "Tailwind",
        "Node",
        "Express",
        "Sql",
        "TypeScript",
        "Ds Algo Basics"
      ]
    },
    {
      year: "2nd-Year",
      skills: [
        "React",
        "Next",
        "Firebase",
        "MongoDB",
        "Redux",
        "Rest-Api",
        "Currently on Agentic AI ............"
      ]
    },
    {
      year: "3rd-Year",
      skills: []
    },
    {
      year: "4th-Year",
      skills: []
    }
  ];

  const requiredData = data.map((currentYear,index)=>{
    return <div className='border border-white rounded-xl text-white shadow-2xl bg-[#0F2854] opacity-80 p-3 hover:-translate-y-2 
          hover:shadow-2xl 
          transition-all 
          duration-300 
          ease-in-out 
          cursor-default
          h-full
          ' key={index} >
        {/* years to display */}
        <div className='text-center text-xl font-bold text-white' >
            {currentYear.year}
        </div>
        {/* skills to display */}
        <div className='flex space-y-3 mt-3'>
            <ul>
                {
                    currentYear.skills.map((skill,index)=>{
                        return <li className='' key={index} >{skill}</li>
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