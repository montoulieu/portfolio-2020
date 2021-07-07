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
              <div className="lg:flex ">
                <div className="lg:w-1/2 mx-auto p-5 sm:px-16 md:px-32 lg:pl-5 lg:pr-10 transition-all duration-200">
                  <ProjectPreview>
                    {project.node.acf.gallery?.length > 1 ? (
                      <Fade {...fadeProperties}>
                        {project.node.acf.gallery.map((image) => (
                          <div
                            className="each-fade"
                            key={image.sourceUrl}
                          >
                            <img
                              src={image.sourceUrl}
                              className="rounded"
                              alt={`${project.node.title} Gallery Screenshot`}
                            />
                            {/* <div className="image-container">
                            </div> */}
                          </div>
                        ))}
                      </Fade>
                    ) : (
                      <img
                        src={project.node.acf.gallery ? project.node.acf.gallery[0].sourceUrl : ''}
                        className="rounded-lg w-full mx-auto"
                        alt={`${project.node.title} Gallery Screenshot`}
                      />
                    )}
                  </ProjectPreview>
                </div>

                <div className="lg:w-1/3 lg:mx-auto flex justify-center flex-col relative z-30 p-5 pr-10">
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

                  {project.node.acf.url
                    && (
                    <a
                      className="btn-teal"
                      href={project.node.acf.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                    )}
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
