import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <h1 style={{ fontSize: 80 }}>{2 + "ff"}</h1>
        <span >{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.state.count === 0 ? <h2>Zero</h2> : this.state.count;
  }
}

export default Counter;
