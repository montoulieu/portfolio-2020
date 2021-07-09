// TODO: Convert this to pull from API
import skills from '../../json/skills.json';

function SkillsList() {
  return (
    <div className="flex justify-start md:justify-center flex-col mr-auto">
      <div className="xl:w-4/5 xl:mx-auto">
        <ul className="">
          {skills.map((skill) => (
            <li
              className={`text-${skill.class} flex items-center mb-2 md:mb-4`}
              key={skill.name}
            >
              <span className="skill-label">{skill.name}</span>
              <ul className="flex content-center">
                {skill.subskills.map((subskill) => (
                  <li
                    className={`inline mr-1 sm:mr-2 px-2 sm:px-3 rounded-3xl font-bold text-sm bg-${skill.class} text-gray-800`}
                    key={subskill}
                  >
                    {subskill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsList;
