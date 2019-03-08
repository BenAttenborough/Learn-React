import React, { Component } from "react";
// import ShoppingList from "./ShoppingList/ShoppingListStart";
// import { Counter, CounterHook } from "./Counter/CounterStart";
// import { Counter } from "./Counter/CounterStart";
import Table from "./Table/Table";
import "./App.css";

class Application extends Component {
  render() {
    const colHeadings = [
      "Serial",
      "MAC",
      "Name",
      "Type",
      "Sync Count",
      "Brightness Schedule",
      "Install",
      "Unassign",
      "Edit"
    ];
    const items = [
      [
        { type: "TEXT", content: "00000000d0216954" },
        { type: "TEXT", content: "b8:27:eb:21:69:54" },
        { type: "TEXT", content: "89d49f1" },
        { type: "TEXT", content: "1 port" },
        { type: "TEXT", content: "0" },
        {
          type: "BUTTON",
          content: {
            label: "Brigthness",
            onClick: () => {
              console.log("Adjusting brightness");
            }
          }
        }
      ],
      [
        { type: "TEXT", content: "000000007c6c899c" },
        { type: "TEXT", content: "b8:27:eb:6c:89:9c" },
        { type: "TEXT", content: "Demo Kit 10" },
        { type: "TEXT", content: "1 port" },
        { type: "TEXT", content: "0" },
        {
          type: "BUTTON",
          content: {
            label: "Brigthness",
            onClick: () => {
              console.log("Adjusting brightness");
            }
          }
        }
      ],
      [
        { type: "TEXT", content: "000000007d251781" },
        { type: "TEXT", content: "b8:27:eb:25:17:81" },
        { type: "TEXT", content: "Demo Kit 11" },
        { type: "TEXT", content: "1 port" },
        { type: "TEXT", content: "0" },
        {
          type: "BUTTON",
          content: {
            label: "Brigthness",
            onClick: () => {
              console.log("Adjusting brightness");
            }
          }
        }
      ]
    ];
    return (
      <div className="App">
        {/* <ShoppingList /> */}
        {/* <Counter /> */}
        {/* <CounterHook /> */}
        <Table
          titleText={"Assigned Controllers: Demo Kits"}
          colHeadings={colHeadings}
          items={items}
        />
      </div>
    );
  }
}

export default Application;
