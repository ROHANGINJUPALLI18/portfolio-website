const SkillComponent = ({stack,title}) => {
    return ( <div>
              <div>
                <div className="text-xl font-semibold mb-2 mt-3" >{title}</div>
                <div className="flex flex-wrap gap-4 px-4">
                {stack.map((skill, index) => (
                  <div
                    key={index}
                    className="
                      flex items-center gap-4
                      px-4 py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      backdrop-blur-md
                      text-sm font-medium
                      hover:bg-white/10
                      hover:scale-105
                      transition-all duration-300
                      shadow-lg
                    "
                  >
                    <span className="text-md">{skill.logo}</span>
                    <span className="p-1 text-md " >{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
    </div> );
}
 
export default SkillComponent;