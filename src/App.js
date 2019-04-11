import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Welcome from './components/Welcome'
class App extends Component {
  constructor() {
    super()
    this.state = {
      loginInfo: [],
      loginDisplay: true,
      currentUser: null,
      currentQuest: null,
      fight: false,
      enemyHealth: 10
    }
  }

  toggleLoginDisplay = () => {
    this.setState({loginDisplay: !this.state.loginDisplay})
  }
  
  getCurrentUser = (user) => {
    this.setState({currentUser: user})
  }
  
  setTheState = (k_v) => {
    this.setState(k_v)  
  }
  
  attackEnemy = () => {
    let randomizer =  Math.floor(Math.random() * 10)
    if (this.state.enemyHealth > 0) {
      this.setState({enemyHealth: this.state.enemyHealth-2})
      if (randomizer < 4) {
        this.setState({playerHealth: this.state.playerHealth-2})
      }
    } 
    this.checkFightStatus()
  }

  checkFightStatus = () => {
    if (this.state.enemyHealth <= 2) {
      fetch(`https://adventure-time-m4cap.herokuapp.com/api/v1/encounter?success=true&user_id=${this.state.currentUser.ID}`, {method: "POST"})
      .then(res => res.json())
      .then(res => this.setState({questComplete: res.quest_complete}))
      .then(res => {
        this.setState({ enemyHealth: 10 })
        this.setState({ fight: false })
        this.checkQuestCompletion()
      })
    } else if (this.state.playerHealth <= 2) {
      fetch(`https://adventure-time-m4cap.herokuapp.com/api/v1/encounter?success=false&user_id=${this.state.currentUser.ID}`, { method: "POST" })
      .then(res => res.json())
      .then(this.setState({fight: false}))
      alert("you do not know de wey")
    }
  }

  checkQuestCompletion = () => {
    if (this.state.questComplete) {
      alert("congrats, you won the quest!")
    } else {
      alert("you won the battle, but not the war")
    }
  }

  render() {
    return (
      <div style={styleBody}>
        < Header />
        <div style={styleLogin}>
          {!this.state.fight && this.state.loginDisplay && <Login display={this.toggleLoginDisplay} 
                                             getUser={this.getCurrentUser}/>}
          {!this.state.fight && !this.state.loginDisplay && <Welcome currentUser={this.state.currentUser} 
                                                location={this.state.currentLocation}
                                                setTheState={this.setTheState}
                                        />}
          {this.state.fight && <div style={styleHealth}>
            <button onClick={this.attackEnemy}>Attack</button>
            <p>
              Your Health: {this.state.playerHealth}
            </p>
            <p>
              Enemy Health: {this.state.enemyHealth}
            </p>
          </div>}
        </div>
      </div>
    );
  }
}

const styleLogin = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80%"
}

const styleBody = {
  height: "100vh",
  backgroundImage: "url('https://i.pinimg.com/originals/f3/64/b7/f364b7d0a49566891789d291b8b2e53f.png')",
  backgroundSize: "cover",
  imageRendering: "pixelated"
}

const styleHealth = {
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  background: "rgba(206, 215, 219, 0.96)",
  padding: "3em",
  borderRadius: "1em"
}
export default App;