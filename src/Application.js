import React, { Component } from 'react';
import ShoppingList from "./ShoppingList/ShoppingListStart";
import './App.css';

class Application extends Component {
	render() {
	  return (
		<div className="App">
		  <ShoppingList />
		</div>
	  );
	}
  }
  
  export default Application;