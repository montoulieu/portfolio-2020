import React from 'react'
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import skills from '../json/skills.json'

function WebSectionSkills() {
  const devStartDate = '01/01/1999';

  return (
    <div className="columns-2 custom-section px-5 text-shadow mx-auto">
      <div className="container mx-auto flex justify-center flex-col ">
        <div className="lg:w-4/5 lg:mx-auto text-blue-200">
          <h1 className="text-4xl md:text-6xl font-semibold text-teal-300 mb-4">Skills</h1>

          <div className="text-md md:text-2xl lg:text-3xl font-light tracking-wide sm:mb-6 pr-3 leading-5 sm:leading-normal">
            <p className="mb-4">From hacking Gameboy ROMs and web sites in the late 90s, to building VR experiences and enterprise apps for the modern web.</p>
            <p className="mb-4">I've spent {formatDistanceStrict(new Date(devStartDate), new Date())} using the latest in web and game technologies, which has always driven me to know and create more than I did yesterday.</p>
          </div>

          <blockquote className="italic font-bold text-xl sm:mb-2 text-teal-300">
            <p>"Upgrade your grey matter,<br className="block sm:hidden" /> cause one day it may matter"</p>
          </blockquote>
          <figcaption className="text-teal-300 italic mb-5">- Deltron 3030</figcaption>
        </div>
      </div>
      <div className="flex justify-start md:justify-center flex-col">
        <div className="lg:w-4/5 lg:mx-auto">
          <ul className="">
            {skills.map((skill) =>
              <li className={`text-${skill.class} flex items-center mb-2 md:mb-4`} key={skill.name}>
                <span className="text-xl md:text-3xl mr-3 w-1/6 leading-none font-bold">{skill.name}</span>
                <ul className="flex content-center overflow-scroll">
                  {skill.subskills.map((subskill, index) =>
                    <li className={`inline mr-1 sm:mr-2 px-2 sm:px-3 rounded-3xl font-bold text-sm bg-${skill.class} text-gray-800`} key={subskill}>{subskill}</li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="synthwave absolute inset-0 opacity-20 overflow-hidden">
        <div className="container mx-auto">
          <div className="sun w-96 h-96 rounded-full bg-fuchsia-500 mt-52 ml-10 opacity-70 transform scale-150"></div>
        </div>
        <svg>
          <defs>
            <clipPath id="svgPath">
              <rect y="560" width="586" height="28" fill="#C4C4C4"/>
              <rect y="509" width="586" height="27" fill="#C4C4C4"/>
              <rect y="461" width="586" height="26" fill="#C4C4C4"/>
              <rect y="416" width="586" height="23" fill="#C4C4C4"/>
              <rect y="368" width="586" height="20" fill="#C4C4C4"/>
              <rect y="334" width="586" height="18" fill="#C4C4C4"/>
              <rect y="296" width="586" height="16" fill="#C4C4C4"/>
              <rect y="260" width="586" height="16" fill="#C4C4C4"/>
              <rect y="226" width="586" height="14" fill="#C4C4C4"/>
              <rect y="194" width="586" height="11" fill="#C4C4C4"/>
              <rect y="164" width="586" height="10" fill="#C4C4C4"/>
              <rect y="136" width="586" height="9" fill="#C4C4C4"/>
              <rect y="110" width="586" height="8" fill="#C4C4C4"/>
              <rect y="86" width="586" height="7" fill="#C4C4C4"/>
              <rect y="62" width="586" height="6" fill="#C4C4C4"/>
              <rect y="39" width="586" height="5" fill="#C4C4C4"/>
              <rect y="16" width="586" height="4" fill="#C4C4C4"/>
              <rect y="0" width="586" height="1" fill="#C4C4C4"/>
            </clipPath>
          </defs>
        </svg>

        <div class="tron-floor"></div>
      </div>
    </div>
  )
}

export default WebSectionSkills
