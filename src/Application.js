import React, { Component } from 'react';
import ShoppingList from "./ShoppingList/ShoppingListStart";
import './App.css';

class Application extends Component {
	render() {
		const list = ["Milk", "Butter", "Flour"]
	  return (
		<div className="App">
		  <ShoppingList name={"Ben"} list={list} />
		</div>
	  );
	}
  }
  
  export default Application;