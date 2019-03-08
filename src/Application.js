import React, { Component } from 'react';
import ShoppingList from "./ShoppingList";
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