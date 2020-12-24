import ReactFullpage from '@fullpage/react-fullpage';
import WebSectionProjectSlider from '../components/WebSectionProjectSlider'
import WebSectionSkills from '../components/WebSectionSkills';
import { getAllPortfolio } from '../lib/api';

export default function SkillsProjects(props) {
  const SEL = 'custom-section';
  const SECTION_SEL = `.${SEL}`;

  return (
    <div className="web">
      <ReactFullpage
        // debug /* Debug logging */

        // Required when using extensions
        // pluginWrapper={pluginWrapper}
        scrollingSpeed={500}
        // fullpage options
        navigation
        navigationTooltips={['Skills', 'Projects - Web']}
        showActiveTooltip
        slidesNavigation
        anchors={['skills', 'projects-web']}
        sectionSelector={SECTION_SEL}
        // onLeave={this.onLeave.bind(this)}

        render={comp => (
          <ReactFullpage.Wrapper>
            <WebSectionSkills />
            <WebSectionProjectSlider portfolio={props.portfolio} />
          </ReactFullpage.Wrapper>
        )}
      />
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

        <div class="tron-floor">

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ ...ctx }) {
  const portfolio = await getAllPortfolio();

  return {
    props: {
      portfolio: portfolio,
    },
  };
}
