import React, { Component } from 'react';

class Main extends Component {

  constructor() {
    super()
    this.state = {}
  }

  toggleAll (toggleState) {
    this.props.checkAll(toggleState);
  }

  setEditable (todo) {
    console.log("clicked on", todo);
    this.setState({
      editable: todo
    })
  }

  classNameFor (todo) {
    if (todo === this.state.editable){
      return "editing"
    } else if (todo.complete) {
      return "completed"
    }
  }

  editTodo (todo, event) {
    this.props.updateTodo(todo, event.target.value)
  }

  finishEdit () {
    if(this.state.editable.task.trim().length === 0){
      this.props.destroyToggle(this.state.editable)
    }
    this.setState({
      editable: null
    })
  }

  render() {
    const someIncomplete = this.props.itemCounter === 0 ? false : true
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" checked={this.props.itemCounter===0}/>
        <label htmlFor="toggle-all" onClick={this.toggleAll.bind(this, someIncomplete)}>Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((todo, index) => {
            return (
              <li className={this.classNameFor(todo)} key={index}> {/*setting the className to "completed" if it's true.*/}
                <div className="view" onDoubleClick={this.setEditable.bind(this, todo)}>
                  <input className="toggle" type="checkbox" onClick={this.props.completedToggle.bind(this, todo)} checked={todo.complete}/>
                  <label>{todo.task}</label>
                  <button className="destroy" onClick={this.props.destroyToggle.bind(this, todo)}></button>
                </div>
                <input className="edit"
                defaultValue={todo.task}
                onBlur={this.finishEdit.bind(this)}
                onChange={this.editTodo.bind(this, todo)}/>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default Main;
