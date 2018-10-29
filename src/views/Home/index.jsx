import React, { Component } from 'react'
import './index.scss'

import Dialog from '../../components/Dialog'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Dialog />
      </div>
    )
  }
}