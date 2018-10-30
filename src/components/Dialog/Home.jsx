import React, { Component } from 'react'
import { animated } from 'react-spring'

export default class Home extends Component {
  render() {
    return (
      <animated.div style={this.props.style} className="dialog__home">
        <h1>SUMIT JOSHI</h1>
        <div className="dialog__divider" />
        <h3>A Web Developer's</h3>
        <h2>PORTFOLIO</h2>
      </animated.div>
    )
  }
}
