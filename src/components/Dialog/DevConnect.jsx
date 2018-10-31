import React, { Component } from 'react'
import Project from './Project'

export default class DevConnect extends Component {
  render() {
    return (
      <Project
        projectNumber="1"
        projectName="DevConnect"
        projectThumbnail={require('../../assets/images/devConnect/devConnect.svg')}
        projectLink="/dev"
        style={this.props.style}
      />
    )
  }
}
