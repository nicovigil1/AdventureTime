import React from 'react'
// import ReactDOM from 'react-dom'
import Adventurer from './Adventurer'
export default class Canvas extends React.Component {
  constructor() {
    super();
    // this.dom = ReactDOM.findDOMNode(this)
    // this.canvas = this.refs.cancan
    // this.context = this.refs.cancan.getContext("2d")
    this.state = {
      user: Adventurer,
      srcX: null
    }
  }

  updateFrame(frameStart, frameEnd, offSet) {
    frameStart = ++frameStart % frameEnd
    this.setState({srcX: frameStart * offSet})
    this.refs.cancan.getContext("2d").clearRect(0, 0, 135, 100)
  }

  buildUserSprite = () => {
    this.updateFrame(this.state.user.idleStart, this.state.user.idleEnd, 50)
    this.context.drawImage(this.state.user.spriteImage, this.srcX, 0, 50, 37, 0, 0, 135, 100)
  }

  render() {
    return (
      <div>
        <button onclick={this.buildUserSprite}>as;dlfkj</button>
        <canvas ref="cancan" style={styleCanvas}></canvas>
      </div>
    )
  }
}

const styleCanvas = {
  height: "50",
  width: "100",
}