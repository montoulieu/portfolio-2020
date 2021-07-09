/* eslint-disable react/destructuring-assignment */
import ReactFullpage from '@fullpage/react-fullpage';
import BackgroundSynthwave from '../components/BackgroundSynthwave';
import ProjectSlider from '../components/ProjectSlider';
import { getAllPortfolio } from '../lib/api';

export default function Projects(props) {
  const webPortfolioItems = props.portfolio.filter((portfolio) => portfolio.node.portfolioTypes.edges[0].node.name === 'Web');
  const vrPortfolioItems = props.portfolio.filter((portfolio) => portfolio.node.portfolioTypes.edges[0].node.name === 'VR');
  const gamePortfolioItems = props.portfolio.filter((portfolio) => portfolio.node.portfolioTypes.edges[0].node.name === 'Games');

  return (
    <div className="web">
      <ReactFullpage
        scrollingSpeed={500}
        navigation
        navigationTooltips={['Web', 'VR', 'Games']}
        showActiveTooltip
        anchors={['web', 'vr', 'games']}
        sectionSelector=".custom-section"
        licenseKey={process.env.FULLPAGE_LICENSE_KEY}
        render={() => (
          <ReactFullpage.Wrapper>
            <ProjectSlider portfolio={webPortfolioItems} />
            <ProjectSlider portfolio={vrPortfolioItems} />
            <ProjectSlider portfolio={gamePortfolioItems} />
          </ReactFullpage.Wrapper>
        )}
      />
      <BackgroundSynthwave />
    </div>
  );
}

export async function getStaticProps() {
  const portfolio = await getAllPortfolio();

  return {
    props: {
      portfolio,
    },
  };
}
