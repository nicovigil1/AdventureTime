import React from 'react'
import Spritesheet from 'react-responsive-spritesheet';

export default class Arena extends React.Component {
  render() {
    return(
      <div style={styleFlex}>
          <Spritesheet
            id="player"
            style={stylePlayer}
            image={`https://i.ibb.co/Kjd23z4/adventurer-1-3-Sheet.png`}
            widthFrame={50}
            heightFrame={37}
            steps={4}
            fps={6}
            autoplay={true}
            loop={true} />
          <Spritesheet
            id="enemy"
            style={styleEnemy}
            image={`https://i.ibb.co/jyBGFQJ/Heavy-Bandit-Spritesheet.png`}
            widthFrame={48}
            heightFrame={48}
            steps={4}
            fps={6}
            autoplay={true}
            loop={true} />
      </div>
    )
  }
}

const styleEnemy = {  
  height: "200px", 
  width: "200px",
  position: "relative",
  right: "13vw"
}

const stylePlayer = {  
  height: "200px", 
  width: "200px",
  alignSelf: "flex-end",
  position: "relative",
}

const styleFlex = {
  display: "flex",
  flexDirection: "row",
  alignSelf: "flex-end",
  width: "100vw"
}