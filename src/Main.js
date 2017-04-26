import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((todo, index) => {
            return (
              <li className={todo.complete ? "completed" : null} key={index}>
                <div className="view">
                  <input className="toggle" type="checkbox" onClick={this.props.checkboxToggle.bind(this, todo)} checked={todo.complete}/>
                  <label>{todo.task}</label>
                  <button className="destroy" onClick={this.props.destroyToggle.bind(this, index)}></button>
                </div>
                <input className="edit" value={todo.task}/>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default Main;
