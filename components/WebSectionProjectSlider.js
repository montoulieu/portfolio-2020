import React, { Component } from 'react'
// import GitHubButton from 'react-github-btn'
import { Fade } from 'react-slideshow-image';
import ProjectPreview from './ProjectPreview';
import projectsWeb from '../json/projects-web.json'

function WebSectionProjectSlider() {
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    indicators: false,
    arrows: false,
  }

  return (
    <div className="custom-section bg-blue-900">
      <div>
        {projectsWeb.map((project) =>
          <div className="slide relative" key={project.name}>
            {/* <div className="bg-overlay bg-gray-900 absolute inset-0 z-20 w-full h-full" style={{backgroundImage: `url(${project.images[0]})` }}></div> */}
            <div className="slide-wrapper columns-2 mx-auto">
              <div className="grid-container">
                <div class="lg:w-4/5 lg:mx-auto">
                  <ProjectPreview>
                    {project.images.length > 0 ? (
                      <Fade {...fadeProperties}>
                        {project.images.map((image) =>
                          <div className="each-fade">
                            <div className="image-container">
                              <img src={image} className="rounded w-full" />
                            </div>
                          </div>
                        )}
                      </Fade>
                    ): (
                      <img src={ project.images[0] } className="rounded-lg w-full"/>
                    )}
                  </ProjectPreview>
                </div>

                <div class="lg:w-4/5 lg:mx-auto flex justify-center flex-col relative z-30">
                  <h2 className="text-blue-400 text-4xl md:text-5xl font-semibold">{ project.name }</h2>
                  <p class="text-xl mb-3 text-blue-300">Built with { project.type } in { project.year }</p>
                  <p class="mb-3 text-blue-200">{project.description}</p>
                  {project.repoUrl &&
                    <div>
                      {/* <GitHubButton href={`${project.repoUrl}/subscription`} data-icon="octicon-eye" data-show-count="true" aria-label="Watch this repo on GitHub" className="mr-2">Watch</GitHubButton>
                      <GitHubButton href={project.repoUrl} data-icon="octicon-star" data-show-count="true" aria-label="Star this repo on GitHub" className="mr-2">Star</GitHubButton>
                      <GitHubButton href={`${project.repoUrl}/fork`} data-icon="octicon-repo-forked" data-show-count="true" aria-label="Star this repo on GitHub">Fork</GitHubButton> */}
                    </div>
                  }
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WebSectionProjectSlider
