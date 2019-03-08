import React, { useState } from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <p>Current count: ???</p>
        <button
          onClick={() => {
            console.log("Should decrement the counter");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            console.log("Should increment the counter");
          }}
        >
          +
        </button>
      </div>
    );
  }
}
