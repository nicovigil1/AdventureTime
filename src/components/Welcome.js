import React from 'react'
import Spritesheet from 'react-responsive-spritesheet';
import NextLocation from './NextLocation'

export default class Welcome extends React.Component {

  constructor() {
    super()
    this.state = {
      displayNextLocation: false,
      currentQuest: {},
      fight: false,
    }
  }
  postLocation = () => {
    navigator.geolocation.getCurrentPosition(async location => {
      let lat = location.coords.latitude
      let lon = location.coords.longitude
      let response = await fetch(`https://adventure-time-m4cap.herokuapp.com/api/v1/quest?user_id=${this.props.currentUser.ID}&lat=${lat}&long=${lon}`, {method: "POST"})
      let data = await response.json();
      this.setState({ currentQuest: data})
      this.setState({ displayNextLocation: !this.state.displayNextLocation })
    })
  }
  checkin = () => {
    navigator.geolocation.getCurrentPosition( location => {
      this.setState({currentLocation: location})
      let lat = this.state.currentLocation.coords.latitude
      let lon = this.state.currentLocation.coords.longitude
      console.log(this.props.currentUser.ID)
      // fetch(`https://adventure-time-m4cap.herokuapp.com/api/v1/checkin?user_id=${this.props.currentUser.ID}&lat=${lat}&long=${lon}`, {method: "POST"})
      fetch(`https://adventure-time-m4cap.herokuapp.com/api/v1/checkin?user_id=${this.props.currentUser.ID}&lat=39.7526897&long=-104.9962246`, {method: "POST"})
        .then(res => res.json())
        .then(res => {
          if (res["success"]) {
            console.log("success")
            this.props.setTheState({playerHealth: this.props.currentUser.current_hp})
            this.props.setTheState({fight: true})
          } else {
            alert("You're not quite there!")
          }
        })
    })
  }

  goBack = (backto) => {
    this.props.setTheState(backto)
  }

  render() {
    return(
      <div style={welcomeStyle}>
      <div style={center}>
        <Spritesheet
          id="player"
          style={stylePlayer}
          image={`https://i.ibb.co/Kjd23z4/adventurer-1-3-Sheet.png`}
          widthFrame={50}
          heightFrame={37}
          steps={60}
          fps={7}
          autoplay={true}
          loop={true} />
      </div>
        <h1>Hello {this.props.currentUser.username}!</h1>
        <div>
          <p>Your Stats</p>
          <div>
          </div>
          <ul>
            <li>Health: {this.props.currentUser.current_hp}</li>
            <li>XP: {this.props.currentUser.current_xp}</li>
          </ul>
          {!this.state.displayNextLocation && <div style={center}>
            <button onClick={this.postLocation}>Quest Info</button><br/>
            <button onClick={this.checkin}>Check In</button>
          </div>}
        </div>
        <div>
          {this.state.displayNextLocation && < NextLocation quest={this.state.currentQuest} goBack={this.goBack}/>}
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

const stylePlayer = {
  height: '100px',
  width: '135px'
}

const center = {
  display: "flex",
  justifyContent: "center"
}