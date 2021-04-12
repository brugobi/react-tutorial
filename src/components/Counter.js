import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment() {
    this.setState((prevState, props) => ({
      count: prevState.count + props.addValue
    }))
  };

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <div>
          <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
      </div>
    )
  }
}



export default Counter;
