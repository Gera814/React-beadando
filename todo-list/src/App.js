import React from 'react';
import './App.css';
import ListItems from "./components/listOfTodos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        currentItem: {
            text: '',
            key: ''
        }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleInput(e) {
      this.setState({
          currentItem: {
              text: e.target.value,
              key: Date.now()
          }
      })
  }

  addTodo(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
      console.log(newItem.text)
    if(newItem.text !== ""){
        const newItems = [...this.state.items, newItem];
        this.setState({
            items: newItems,
            currentItem: {
                text : '',
                key : ''
            }
        })
        console.log(this.state.items)
    }

  }


  deleteTodo(key){
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
        items: filteredItems
    })
  }

  updateTodo(value, key){
      const items = this.state.items;
      items.map(item => {
          if(item.key === key){
              item.text = value;
          }
      });
      this.setState({
          items: items
      })

  }

  render() {
    return (
        <div className="App">
          <header>
              <form id="todoForm" onSubmit={this.addTodo}>
                  <input type="text" value={this.state.currentItem.text} onChange={this.handleInput}/>
                  <button type="submit">Add</button>
              </form>

          </header>
            <ListItems items = {this.state.items} deleteItem = {this.deleteTodo} updateItem = {this.updateTodo}></ListItems>
        </div>
    )
  }
}

export default App;
