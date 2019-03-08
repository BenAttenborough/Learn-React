import React, { Component } from "react";
import ShoppingList from "./ShoppingList/ShoppingListStart";
// import { Counter, CounterHook } from "./Counter/CounterStart";
import { Counter } from "./Counter/CounterStart";
import "./App.css";

class Application extends Component {
  render() {
    return (
      <div className="App">
        {/* <ShoppingList /> */}
        <Counter />
        {/* <CounterHook /> */}
      </div>
    );
  }
}

export default Application;
