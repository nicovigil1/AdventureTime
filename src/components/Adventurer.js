import React from 'react'

export default class Adventurer extends React.Component {
  constructor() {
    super();
    this.idleStart = 0
    this.idleEnd = 4
  }

  static spriteImage() {
    let image = new Image();
    image.src = "../../public/images/spr.png"
    return image
  }
}

