import React from 'react'

export default class NextLocation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentLocation: null 
    }
  }
  
  componentDidMount() {
    this.getCurrentQuest()
  }

  parseLocation = (location) => {
    return location.split("|")[1].split(",")[0]
  }
  getCurrentQuest = () => {
    const currentQuest = this.props.quest
    console.log(this.props.quest.current_location)
    if (currentQuest.current_location === 1) {
      this.setState({currentLocation: this.parseLocation(currentQuest.location_1)})
    } else if (currentQuest.current_location === 2) {
      this.setState({currentLocation: this.parseLocation(currentQuest.location_2)})
    } else if (currentQuest.current_location === 3) {
      this.setState({currentLocation: this.parseLocation(currentQuest.location_3)})
    }
    console.log(this.state.currentLocation)
  }

  goBack = () => {
    this.props.goBack({loginDisplay: true})
  }

  render () {
    return (
      <div style={center}>
        <button onClick={this.goBack}>Go back</button>
        <h1>Next location:</h1>
          <a href={"https://maps.google.com/?q=" + this.state.currentLocation}>{this.state.currentLocation}</a>
      </div>
    )
  }
}

const center = {
  display: "flex",
  flexDirection: "column"
}