import React, { Component } from 'react'
import { animated } from 'react-spring'

export default class Home extends Component {
  render() {
    return (
      <animated.div className="dialog__home">
        <h1>SUMIT JOSHI</h1>
        <br />
        <div className="dialog__divider" />
        <h3>PORTFOLIO</h3>
      </animated.div>
    )
  }
}
