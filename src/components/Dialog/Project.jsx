import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { animated } from 'react-spring'

const Project = props => {
  return (
    <animated.div className="project" style={props.style}>
      <h2>project</h2>
      <div className="project__number">
        <h4>{props.projectNumber}</h4>
        <div className="project__dash" />
        <h4>5</h4>
      </div>
      <img src={props.projectThumbnail} className="project__thumbnail" alt="project thunmbnail" />
      <Link to={props.projectLink}>View Project</Link>
    </animated.div>
  )
}

export default Project
