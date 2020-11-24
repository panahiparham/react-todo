
import {makeObservable , observable, action, computed} from 'mobx'

import TodoModel from './TodoModel'


class TodoStore {
    todos
    lastID
    flag

    constructor() {

        this.todos = []
        this.lastID = 0
        this.flag = 'all'


        makeObservable(this, {
            todos: observable,
            flag: observable,

            addTodo: action,

            todosLeft: computed,
            printable: computed,
        })
    }

    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID ++))
    }

    get todosLeft() {
        return(this.todos.filter(todo => todo.completed === false).length)
    }

    get printable() {

        if (this.flag === 'all'){
            return(this.todos)
        } else if (this.flag === 'active') {
            return(this.todos.filter(todo => todo.completed === false))
        } else if (this.flag === 'completed') {
            return(this.todos.filter(todo => todo.completed === true))
        } else {
            console.log('Printable Error')
        }

    }

}

const todoStore = new TodoStore()
export default todoStore