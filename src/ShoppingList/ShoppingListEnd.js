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