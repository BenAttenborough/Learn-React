import React, { useState } from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <p>Current count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

// Alternative

export const CounterHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter using hooks</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
