import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParenttoUsePureComponentEx extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Bruna'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Bruna'
      })
    }, 20000)
  }

  render() {
    console.log('*************Parent Component to use in Pure Component example render')
    return (
      <div>
        Parent Component to use in Pure Component example
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParenttoUsePureComponentEx;
