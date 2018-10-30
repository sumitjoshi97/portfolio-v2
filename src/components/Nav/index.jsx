import React, { Component } from 'react'
import './index.scss'

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list__item">about me</li>
          <li className="nav__list__item">work</li>
        </ul>
      </nav>
    )
  }
}
