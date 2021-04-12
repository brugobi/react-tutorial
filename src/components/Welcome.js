import React, { Component } from 'react'

class Welcome extends Component {
  
  render() {
    const {name, continentName} = this.props
    return (
      <h1>
        Welcome {name} located in {continentName}
      </h1>
    )
  }
}

export default Welcome;
