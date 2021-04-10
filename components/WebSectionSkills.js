import React from 'react'
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import skills from '../json/skills.json'

function WebSectionSkills() {
  const devStartDate = '01/01/1999';

  return (
    <div className="columns-2 container custom-section px-5 text-shadow mx-auto">
      <div className="flex justify-center flex-col ">
        <div className="lg:w-4/5 lg:mx-auto text-blue-200">
          <h1 className="text-4xl md:text-6xl font-semibold text-teal-300 mb-4">Skills</h1>

          <div className="text-md md:text-3xl font-light tracking-wide sm:mb-6">
            <p className="mb-4">From hacking Gameboy ROMs and web sites in the late 90s, to building VR experiences and enterprise apps for the modern web.</p>
            <p className="mb-4">I've spent {formatDistanceStrict(new Date(devStartDate), new Date())} using the latest in web and game technologies, which has always driven me to know and create more than I did yesterday.</p>
          </div>

          <blockquote className="italic font-bold text-xl sm:mb-2 text-teal-300">
            <p>"Upgrade your grey matter,<br className="block sm:hidden" /> cause one day it may matter"</p>
          </blockquote>
          <figcaption className="text-teal-300 italic">- Deltron 3030</figcaption>
        </div>
      </div>
      <div className="flex justify-start md:justify-center flex-col">
        <div className="lg:w-4/5 lg:mx-auto">
          <ul className="">
            {skills.map((skill) =>
              <li className={`text-${skill.class} flex items-center mb-2 md:mb-4`}>
                <span className="text-xl md:text-3xl mr-3 w-1/6 leading-none font-bold">{skill.name}</span>
                <ul className="flex content-center overflow-scroll">
                  {skill.subskills.map((subskill, index) =>
                    <li className={`inline mr-1 sm:mr-2 px-2 sm:px-3 rounded-3xl font-bold text-sm bg-${skill.class} text-gray-800`}>{subskill}</li>
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
