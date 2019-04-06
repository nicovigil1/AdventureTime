import React from 'react'

export default class Welcome extends React.Component {
  render() {
    return(
      <div style={welcomeStyle}>
        <h1>Hello {this.props.currentUser.username}!</h1>
        <div>
          <p>Your Stats</p>
          <ul>
            <li>Health: {this.props.currentUser.current_hp}</li>
            <li>XP: {this.props.currentUser.current_xp}</li>
            {console.log(this.props.currentUser)}
          </ul>
          <div style={centerQuest}>
            <button>Start Quest!</button>
            <button>Replenish Health</button>
          </div>
        </div>
      </div>
    )
  }
}

const welcomeStyle = {
  background: "rgba(206, 215, 219, 0.96)",
  padding: "1em",
  borderRadius: "1em"
}

const centerQuest = {
  display: "flex",
  justifyContent: "center"
}