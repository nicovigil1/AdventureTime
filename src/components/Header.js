import React from 'react'

export default class Header extends React.Component {
  render () {
    return(
      <div style={navStyle}>
        Welcome to AdventureTime
      </div>
    )
  }
}

const navStyle = {
  display: "flex",
  backgroundColor: "#63b4f4",
  justifyContent: "center",
  color: "black",
  paddingTop: ".5em",
  paddingBottom: ".5em",
  boxShadow: "0px 0px 10px 5px #000"
}