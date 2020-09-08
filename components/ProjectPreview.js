import React, { Component } from 'react'

export default class ProjectPreview extends Component {
  render() {
    return (
      <div className="project-preview shadow-2xl border-2 border-gray-500 relative z-30">
        <div className="bezel bg-black p-4 overflow-hidden">
          { this.props.children }
        </div>
      </div>
    )
  }
}
