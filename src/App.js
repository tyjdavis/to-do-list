import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends Component {

  constructor (){
    super();
    this.state = { //setting the state to be an object
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

  checkboxToggle(todo) {
    this.setState({
      todos: this.state.todos.map(current => {
        if (current === todo) {
          current.complete = !current.complete
        }
        return current;
      })
    })
  }

  // old code for checkboxToggle
  //
  // checkboxToggle(todo) {
  //   console.log(todo);
  //   todo.complete = !todo.complete;
  //   this.forceUpdate();
  // }


  destroyToggle(todo) { //use filter
    this.setState({
      todos: this.state.todos.filter(current => current !== todo)
    });
  }

//   old code for destroyToggle

//   destroyToggle(index) {
//     this.state.todos.splice(index, 1);
//     this.forceUpdate();
// }


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
            hide={this.state.todos.length === 0}
          />
        </section>
    );
  }
}

export default App;
