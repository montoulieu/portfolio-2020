import SkillsList from '../components/skills/SkillsList';
import SkillsText from '../components/skills/SkillsText';
import BackgroundSynthwave from '../components/BackgroundSynthwave';

export default function Skills() {
  return (
    <div className="h-full px-5 sm:px-10 text-shadow mx-auto">
      <div className="h-full flex container flex-col lg:flex-row justify-center items-center md:items-start lg:items-center">
        <SkillsText />
        <SkillsList />
      </div>

      <BackgroundSynthwave />
    </div>
  );
}
