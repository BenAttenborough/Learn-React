import React from 'react';

function ShoppingList(props) {
	console.log(props)
	  return (
		<div className="shoppingList">
		  <h1>Shopping List for {props.name}</h1>
		  <ul>
			{props.list.map(item => {
				return <li>{item}</li>
			})}
		  </ul>
		</div>
	  );
  }

export default ShoppingList

// Alternative 1

const ShoppingList1 = (props) => {
	console.log(props)
	  return (
		<div className="shoppingList">
		  <h1>Shopping List for {props.name}</h1>
		  <ul>
			{props.list.map(item => {
				return <li>{item}</li>
			})}
		  </ul>
		</div>
	  );
  }

// Alternative 2

class ShoppingList1 extends React.Component {
	render() {
		return (
			<div className="shoppingList">
			  <h1>Shopping List for {props.name}</h1>
			  <ul>
				{props.list.map(item => {
					return <li>{item}</li>
				})}
			  </ul>
			</div>
		  );
	}
  }