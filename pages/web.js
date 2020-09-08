import ReactFullpage from '@fullpage/react-fullpage';
import WebSectionProjectSlider from '../components/WebSectionProjectSlider'
import WebSectionSkills from '../components/WebSectionSkills';

export default function Web() {
  const SEL = 'custom-section';
  const SECTION_SEL = `.${SEL}`;

  return (
    <div className="web">
      <ReactFullpage
        debug /* Debug logging */

        // Required when using extensions
        // pluginWrapper={pluginWrapper}
        scrollingSpeed={500}
        // fullpage options
        navigation
        navigationTooltips={['Skills', 'Projects']}
        showActiveTooltip
        slidesNavigation
        anchors={['skills', 'projects']}
        sectionSelector={SECTION_SEL}
        // onLeave={this.onLeave.bind(this)}

        render={comp => (
          <ReactFullpage.Wrapper>
            <WebSectionSkills />
            <WebSectionProjectSlider />
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  )
}
