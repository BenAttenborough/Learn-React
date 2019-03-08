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