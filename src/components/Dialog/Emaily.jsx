import React, { Component } from 'react'
import Project from './Project'
import { animated } from 'react-spring'
import { Link } from 'react-router-dom'

export default class Emaily extends Component {
  render() {
    return (
      <Project
        projectNumber="2"
        projectName="DevConnect"
        projectThumbnail=""
        projectLink="/dev"
        style={this.props.style}
      />
    )
  }
}
