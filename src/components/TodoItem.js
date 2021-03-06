import React, { Component } from "react";

import {observer} from 'mobx-react'

import TodoStore from '../Stores/TodoStore'


class TodoItem extends Component {

  onToggle = () => {
    this.props.todo.toggle()
  }

  removeTodo = () => {

    TodoStore.todos = TodoStore.todos.filter(todo => todo !== this.props.todo)

  }


  render() {
      const { todo } = this.props
    return (
      <li className={todo.completed ? 'completed' : ' '}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed} />
          <label>{todo.title}</label>
          <button className="destroy" onClick={this.removeTodo}/>
        </div>
      </li>
    );
  }
}

TodoItem = observer(TodoItem)

export default TodoItem;
