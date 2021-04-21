import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import BackgroundSynthwave from './BackgroundSynthwave';
import SkillsList from './skills/SkillsList';

export default function HomeSectionSkills() {
  const devStartDate = '01/01/1999';

  return (
    <div className="columns-2 custom-section px-5 text-shadow mx-auto">
      <div className="container mx-auto flex justify-center flex-col ">
        <div className="lg:w-4/5 lg:mx-auto text-blue-200">
          <h1 className="text-4xl md:text-6xl font-semibold text-teal-300 mb-4">Skills</h1>

          <div className="text-md md:text-2xl xl:text-3xl font-light tracking-wide sm:mb-6 pr-3 leading-5 sm:leading-normal">
            <p className="mb-4">From hacking Gameboy ROMs and web sites in the late 90s, to building VR experiences and enterprise apps for the modern web.</p>
            <p className="mb-4">
              I&quot;ve spent
              {' '}
              {formatDistanceStrict(new Date(devStartDate), new Date())}
              {' '}
              using the latest in web and game technologies, which has always driven me to know and create more than I did yesterday.
            </p>
          </div>

          {/* TODO: Convert to component, potentially pull more quotes from API? */}
          <blockquote className="italic font-bold text-xl sm:mb-2 text-teal-300">
            <p>
              &quot;Upgrade your grey matter,
              <br className="block sm:hidden" />
              {' '}
              cause one day it may matter&quot;
            </p>
          </blockquote>

          <figcaption className="text-teal-300 italic mb-5">- Deltron 3030</figcaption>
        </div>
      </div>

      <SkillsList />
      <BackgroundSynthwave />
    </div>
  );
}
