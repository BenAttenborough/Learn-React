import React, { Component } from "react";
import ShoppingList from "./ShoppingList/ShoppingListStart";
// import { Counter, CounterHook } from "./Counter/CounterStart";
// import { Counter } from "./Counter/CounterStart";
// import Conditional from "./Conditional/Conditional";
// import Table from "./TableEnd/Table";
// import { colHeadings, items } from "./TableData";
import "./Application.css";

/**
 * Uncomment components above and below to see them in action!
 */

class Application extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList />
        {/* <Counter /> */}
        {/* <CounterHook /> */}
        {/* <Conditional /> */}
        {/* <Table
          titleText={"Assigned Controllers: Demo Kits"}
          colHeadings={colHeadings}
          items={items}
        /> */}
      </div>
    );
  }
}

export default Application;
