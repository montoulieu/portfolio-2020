import ReactFullpage from '@fullpage/react-fullpage';
import HomeIntro from '../components/HomeIntro';
import HomeSectionSkills from '../components/HomeSectionSkills';

export default function Home(props) {

  const SEL = 'custom-section';
  const SECTION_SEL = `.${SEL}`;

  return (
    <div className="home">

      <ReactFullpage
        // debug /* Debug logging */

        // Required when using extensions
        // pluginWrapper={pluginWrapper}
        scrollingSpeed={500}
        // fullpage options
        navigation
        navigationTooltips={['Intro', 'Skills']}
        showActiveTooltip
        slidesNavigation
        anchors={['intro', 'skills']}
        sectionSelector={SECTION_SEL}
        licenseKey={process.env.FULLPAGE_LICENSE_KEY}
        // onLeave={this.onLeave.bind(this)}

        render={comp => (
          <ReactFullpage.Wrapper>
            <HomeIntro />
            <HomeSectionSkills />
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  )
}
