import React, { Component } from 'react'
import Project from './Project'
import { animated } from 'react-spring'
import { Link } from 'react-router-dom'

export default class Burger extends Component {
  render() {
    return (
      <animated.div className="project" style={this.props.style}>
        <h2>project</h2>
        <div className="project__number">1/5</div>
        <img src='' alt="project thunmbnail" />
        <Link to='#'>View Project</Link>
      </animated.div>
    )
  }
}
