import React, { Component } from "react";

import TodoItem from './TodoItem'
import todoStore from '../Stores/TodoStore'

import {observer} from 'mobx-react'

class TodoItems extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">

            {
                todoStore.printable.map(todo => {
                    return(
                        <TodoItem todo={todo}/>
                    )
                })
            }
            
        </ul>
      </section>
    );
  }
}

TodoItems = observer(TodoItems)

export default TodoItems;
