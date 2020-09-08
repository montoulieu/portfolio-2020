import React from 'react'
import skills from '../json/skills.json'

function WebSectionSkills() {
  return (
    <div className="columns-2 custom-section bg-blue-900 px-5">
      <div className="flex justify-center flex-col">
        <div className="lg:w-4/5 lg:mx-auto text-blue-200">
          <h1 className="text-4xl md:text-6xl font-semibold text-blue-400">Skills</h1>
          <p className="text-md md:text-3xl font-light mb-4">I've spent over half my life creating with the latest in web and game technologies.</p>
          <p className="text-md md:text-3xl font-light">In that time, my daily goal has always been to create and know more than I did the day before.</p>
        </div>
      </div>
      <div className="flex justify-start md:justify-center flex-col">
        <div className="lg:w-4/5 lg:mx-auto">
          <ul className="">
            {skills.map((skill) =>
              <li className={`${skill.class} md:flex items-end mb-2 md:mb-4`}>
                <span className="text-xl md:text-3xl mr-3 md:mr-5 md:w-1/7 leading-none font-bold font-medium">{skill.name}</span>
                <ul>
                  {skill.subskills.map((subskill, index) =>
                    <li className={`inline mr-2 ${skill.class}`}>{subskill} {`${skill.subskills.length - 1 === index ? '' : '/'}`}</li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WebSectionSkills
