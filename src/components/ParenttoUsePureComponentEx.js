import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
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
    }, 2000)
  }

  render() {
    console.log('*************Parent Component to use in Pure Component example render')
    return (
      <div>
        Parent Component to use in Pure Component example
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParenttoUsePureComponentEx;
