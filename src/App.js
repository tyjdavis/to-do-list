import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends Component {

  constructor (){
    super();
    this.state = { //setting the state to be an object
      todos: [
        // {task: 'Taste JavaScript', complete: false},
        // {task: 'Buy a unicorn', complete: false}
      ]
    }
  }


  addTodo (words){
    let newTodo = { task: words, complete: false }
    let newTodosArray = this.state.todos.concat(newTodo)
    this.setState({
      todos: newTodosArray
    })
  }

  checkboxToggle(todo) {
    console.log(todo);
    todo.complete = !todo.complete;
    this.forceUpdate();
  }

  destroyToggle(index) {
    this.state.todos.splice(index, 1);
    this.forceUpdate();
  }

  itemCounter() {
    if (this.state.todos.length === 0){
      return 0;
    } else {
      return this.state.todos.length;
    }
  }


  render() {
    return (
        <section className="todoapp">
          <Header
            sendWordstoApp={this.addTodo.bind(this)}
          />
          <Main
            todos={this.state.todos}
            checkboxToggle={this.checkboxToggle.bind(this)}
            destroyToggle={this.destroyToggle.bind(this)}
          />
          <Footer
            itemCounter={this.itemCounter()}
          />
        </section>
    );
  }
}

export default App;
