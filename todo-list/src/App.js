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
    this.addTodo = this.addTodo.bind(this)
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
    if(newItem.text ==! ""){
        const newItems = [...this.state.items, newItem];
        this.setState({
            items: newItems,
            currentItem: {
                text : '',
                key : ''
            }
        })

    }

  }
  render() {
    return (
        <div className="App">
          <header>
              <form id="todoForm" onSubmit={this.addItem}>
                  <input type="text" value={this.state.currentItem.text} onChange={this.handleInput}/>
                  <button onClick={this.addTodo}>Add</button>
              </form>

          </header>
            <ListItems></ListItems>
        </div>
    )
  }
}

export default App;
