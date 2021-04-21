import { Fade } from 'react-slideshow-image';
import ProjectPreview from './ProjectPreview';

function ProjectSlider(props) {
  const { portfolio } = props;

  const fadeProperties = {
    duration: 7500,
    transitionDuration: 500,
    indicators: false,
    arrows: false,
  };

  return (
    <div className="custom-section">
      <div className="container mx-auto relative">
        {portfolio.map((project) => (
          <div
            className="slide"
            key={project.name}
          >
            {/* <div className="bg-overlay bg-gray-900 absolute inset-0 z-20 w-full h-full" style={{backgroundImage: `url(${project.images[0]})` }}></div> */}
            <div className="slide-wrapper columns-2 mx-auto h-full sm:h-auto bg-black sm:bg-transparent bg-opacity-20">
              <div className="grid-container">
                <div className="lg:w-4/5 lg:mx-auto">
                  <ProjectPreview>
                    {project.node.acf.gallery?.length > 1 ? (
                      <Fade {...fadeProperties}>
                        {project.node.acf.gallery.map((image) => (
                          <div className="each-fade">
                            <div className="image-container">
                              <img
                                src={image.sourceUrl}
                                className="rounded w-full"
                              />
                            </div>
                          </div>
                        ))}
                      </Fade>
                    ) : (
                      <img
                        src={project.node.acf.gallery ? project.node.acf.gallery[0].sourceUrl : ''}
                        className="rounded-lg w-full mx-auto"
                      />
                    )}
                  </ProjectPreview>
                </div>

                <div className="lg:w-4/5 lg:mx-auto flex justify-center flex-col relative z-30 pt-3 px-3">
                  <h2 className="text-teal-300 text-2xl sm:text-4xl md:text-5xl font-bold mb-3">{ project.node.title }</h2>
                  <p className="text-md sm:text-xl sm:mb-3 font-bold italic text-fuchsia-200">
                    Built with
                    {' '}
                    { project.node.acf.type }
                    {' '}
                    in
                    {' '}
                    { new Date(project.node.date).getFullYear() }
                  </p>
                  <div
                    className="mb-3 text-blue-200"
                    dangerouslySetInnerHTML={{ __html: project.node.acf.description }}
                  />
                  {project.repoUrl
                    && (
                    <div>
                      {/* <GitHubButton href={`${project.repoUrl}/subscription`} data-icon="octicon-eye" data-show-count="true" aria-label="Watch this repo on GitHub" className="mr-2">Watch</GitHubButton>
                      <GitHubButton href={project.repoUrl} data-icon="octicon-star" data-show-count="true" aria-label="Star this repo on GitHub" className="mr-2">Star</GitHubButton>
                      <GitHubButton href={`${project.repoUrl}/fork`} data-icon="octicon-repo-forked" data-show-count="true" aria-label="Star this repo on GitHub">Fork</GitHubButton> */}
                    </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSlider;
