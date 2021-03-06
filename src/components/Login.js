import React from 'react'

export default class Login extends React.Component {
  getLogin = () => {
    let getLoginText = document.querySelector("#textBox").value
    console.log(getLoginText)
    if (getLoginText !== "") {
      let url = `https://adventure-time-m4cap.herokuapp.com/api/v1/login?username=${getLoginText}`;
      fetch(url, { method: "POST" })
        .then(res => res.json())
        .then(person => {
          if (person.Error) {
            alert("User not found")
            throw (new Error("whoops"))
          } else {
            this.props.getUser(person.Value)
          }
        })
        .then(this.props.display)
        .catch(err => {
          console.log(err)
        })
    }
  }
  render() {
    return(
      <div style={styleLogin}>
        <p>Sign in Below!</p>
        <input id="textBox" type="text"/>
        <button onClick={this.getLogin} style={styleSubmit}>Login</button>
      </div>
    )
  }
}


const styleLogin = {
  display: "flex", 
  flexDirection: "column",
  textAlign: "center",
  padding: "2em",
  background: "rgba(206, 215, 219, 0.96)",
  borderRadius: "1em"
}

const styleSubmit = {
  marginTop: ".4em",
  marginLeft: "2em",
  marginRight: "2em"
}