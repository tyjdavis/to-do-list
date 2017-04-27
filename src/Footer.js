import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Footer extends Component {

  render(){
    return (
      <footer className="footer" hidden={this.props.hide}>
        {/*This should be `0 items left` by default*/}
        <span className="todo-count"><strong> {this.props.itemCounter} </strong> item left</span>
        {/*Remove this if you don't implement routing*/}
        <ul className="filters">
          <li>
            <Link className="selected" to="/">All</Link>
          </li>
          <li>
            <Link to="/active">Active</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
        </ul>
        {/*Hidden if no completed items are left ↓ */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

export default Footer;
