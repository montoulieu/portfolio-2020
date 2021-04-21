import ReactFullpage from '@fullpage/react-fullpage';
import HomeIntro from '../components/HomeIntro';
import HomeSectionSkills from '../components/HomeSectionSkills';

export default function Home() {
  const SEL = 'custom-section';
  const SECTION_SEL = `.${SEL}`;

  return (
    <div className="home">
      <ReactFullpage
        scrollingSpeed={500}
        navigation
        navigationTooltips={['Intro', 'Skills']}
        anchors={['intro', 'skills']}
        sectionSelector={SECTION_SEL}
        licenseKey={process.env.FULLPAGE_LICENSE_KEY}
        render={() => (
          <ReactFullpage.Wrapper>
            <HomeIntro />
            <HomeSectionSkills />
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}
