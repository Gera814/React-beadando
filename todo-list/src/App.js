import React from 'react';
import './App.css';
import ListItems from "./components/listOfTodos";

export function Rtif({boolean, ...props}) {
    const { children } = props;
    if (boolean)
        return (
            {...children}
        );
    return null;
}

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
            <div className="createdHolder">
                <img src="avatar.png" alt=""/>
                <p id="created">Created by Geresdi Bence</p>
            </div>
            <img id="ball1" src="Ellipse 22.png" alt=""/>
            <img id="ball2" src="Ellipse 21.png" alt=""/>
            <img id="ball3" src="Ellipse 30.png" alt=""/>
            <img id="ball4" src="Ellipse 23.png" alt=""/>
            <img id="ball5" src="Rectangle 36.png" alt=""/>
            <img id="ball6" src="Group 20.png" alt=""/>





            <img className="points" src="Group 12.png" alt=""/>
            <div className="leftMain">
              <div className="titleHolder">
                  <h1>My Todo App</h1>
                  <p>Welcome back to the app, we missed You!</p>
              </div>
              <div className="imageHolder">
                  <img className="mainImg" src="Group 4.png" alt=""/>
              </div>

          </div>

            <div className="rightMain">
                <div className="textHolder">
                    <h1>Here is your Todo List</h1>
                    <p>Add task with the plus button and complete them. Easily follow your daily tasks and be successful! Click on the todo text to edit!</p>
                </div>
                <div className="inputHolder">
                    <form id="todoForm" onSubmit={this.addTodo}>
                        <input placeholder="Type here your todo..." type="text" value={this.state.currentItem.text} onChange={this.handleInput}/>
                        <button type="submit">+</button>
                    </form>
                </div>
                <div className="dayHolder">
                    <h3>Todos</h3>
                    <hr/>
                </div>
                <div className="todoHolder">
                    <Rtif boolean={this.state.items.length == 0}>
                        <div>
                            <img  src="undraw_completed_ngx6.png" alt=""/>
                            <h2>Celebrate, you're all done.</h2>
                            <p>Have a good day!</p>
                        </div>
                    </Rtif>

                    <ListItems items = {this.state.items} deleteItem = {this.deleteTodo} updateItem = {this.updateTodo}></ListItems>
                </div>

            </div>
        </div>
    )
  }
}

export default App;
