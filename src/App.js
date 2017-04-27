import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends Component {

  constructor (){
    super();
    this.state = {
      todos: []
    }
  }


  addTodo (words){
    let newTodo = { task: words, complete: false }
    let newTodosArray = this.state.todos.concat(newTodo)
    this.setState({
      todos: newTodosArray
    })
  }


  completedToggle(todo) {
    let newcheckboxArray = this.state.todos.map(current => {
      if (current === todo) {
        current.complete = !current.complete
      }
      return current;
    })
    this.setState({
      todos: newcheckboxArray
    })
  }


  destroyToggle(todo) {
    let newToggleArray = this.state.todos.filter(current => current !== todo)
    this.setState({
      todos: newToggleArray
    });
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
            completedToggle={this.completedToggle.bind(this)}
            destroyToggle={this.destroyToggle.bind(this)}
          />
          <Footer
            itemCounter={this.itemCounter()}
            hide={this.state.todos.length === 0}
          />
        </section>
    );
  }
}

export default App;
