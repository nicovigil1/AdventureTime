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
    }
  }

  toggleLoginDisplay = () => {
    this.setState({loginDisplay: !this.state.loginDisplay})
  }

  getCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(location => { console.log(location) }) //(location => {return location})
  }

  render() {
    return (
      <div style={styleBody}>
        < Header />
        <div style={styleLogin}>
          {this.state.loginDisplay && <Login display={this.toggleLoginDisplay} 
                                             getLocation={this.getCurrentLocation}
                                             getUser={this.getCurrentUser}/>}
          {!this.state.loginDisplay && <Welcome currentUser={this.state.currentUser} />}
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
  backgroundImage: "url('https://i.pinimg.com/736x/3c/1e/d3/3c1ed3034e801dcb19e06558501fd457.jpg')",
  backgroundSize: "cover"
}

export default App;