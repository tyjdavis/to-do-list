import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
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


  itemCounter(){
    return this.state.todos.filter(remaining => !remaining.complete).length
  }



  checkAll(toggleState) {
    let newTodos = this.state.todos.map(checked =>{
      checked.complete = toggleState;
      return(checked);
    })
    this.setState({
      todos: newTodos
    })
  }


  updateTodo (todoToChange, task) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo === todoToChange) {
        todo.task = task
      }
      return todo
    })
    this.setState({
      todos: updatedTodos})
  }


  render() {
    return (
      <Router>
        <section className="todoapp">
          <Header
            addTodo={this.addTodo.bind(this)}
          />
          <Route path="/:find?" render={(defaultProps) => <Main
            todos={this.state.todos}
            completedToggle={this.completedToggle.bind(this)}
            destroyToggle={this.destroyToggle.bind(this)}
            checkAll={this.checkAll.bind(this)}
            itemCounter={this.itemCounter()}
            updateTodo={this.updateTodo.bind(this)}
            {...defaultProps} />}
          />
          <Footer
            itemCounter={this.itemCounter()}
            hide={this.state.todos.length === 0}
          />
        </section>
      </Router>
    );
  }
}

export default App;
