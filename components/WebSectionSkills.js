import React from 'react'
import formatDistanceStrict from 'date-fns/formatDistanceStrict';


import skills from '../json/skills.json'

function WebSectionSkills() {
  const devStartDate = '01/01/1999';

  return (
    <div className="columns-2 custom-section bg-blue-900 px-5 text-shadow">
      <div className="flex justify-center flex-col">
        <div className="lg:w-4/5 lg:mx-auto text-blue-200">
          <h1 className="text-4xl md:text-6xl font-semibold text-blue-400">Skills</h1>
          <p className="text-md md:text-2xl font-light mb-4">From the humble beginnings of hacking Gameboy games and websites in the late 90s, to building large-scale React and Vue apps and VR experiences for the masses.</p>
          <p className="text-md md:text-2xl font-light mb-4">I've spent over {formatDistanceStrict(new Date(devStartDate), new Date())} learning and building with the latest in web and game technologies.<br className="none md:block"/> In that time, my goal has always been to push myself to create and know more than I did the day before.</p>
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
