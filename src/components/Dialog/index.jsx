import React, { PureComponent } from 'react'
import { Transition, animated } from 'react-spring'
import Home from './Home'
import DevConnect from './DevConnect'
import Emaily from './Emaily'
import './index.scss'

const pages = [
  style => <Home style={style} />,
  style => <DevConnect style={style} />,
  style => <Emaily style={style} />
]

export default class Dialog extends PureComponent {
  state = { index: 0 }

  onWheel = e => {
    let { index } = this.state
    if (e.deltaY < 0) {
      index = index === 0 ? 2 : index - 1
    } else {
      index = index === 2 ? 0 : index + 1
    }
    this.setState(() => ({ index }))
  }

  render() {
    return (
      <div className="dialog" onWheel={this.onWheel}>
        <Transition
          native
          reset
          unique
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
