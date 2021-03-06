import React, { PureComponent } from 'react'
import { Transition } from 'react-spring'
import Home from './Home'
import DevConnect from './DevConnect'
import Emaily from './Emaily'
import Cart from './Cart'
import SmartBrain from './SmartBrain'
import Burger from './Burger'

import './index.scss'

const pages = [
  style => <Home style={style} />,
  style => <DevConnect style={style} />,
  style => <Emaily style={style} />,
  style => <Cart style={style} />,
  style => <SmartBrain style={style} />,
  style => <Burger style={style} />
]

export default class Dialog extends PureComponent {
  state = { index: 0 }

  onWheel = e => {
    let { index } = this.state
    if (e.deltaY < 0) {
      index = index === 0 ? pages.length - 1 : index - 1
    } else {
      index = index === pages.length - 1 ? 0 : index + 1
    }
    this.setState(() => ({ index }))
  }

  render() {
    return (
      <div className="dialog" onWheel={this.onWheel}>
        <Transition
          native
          reset={true}
          unique={true}
          keys={this.state.index}
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
        >
          {index => pages[index]}
        </Transition>
      </div>
    )
  }
}
