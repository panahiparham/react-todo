
import {makeObservable , observable, action} from 'mobx'

export default class TodoModel {

    store
    id
    title
    completed

    constructor(store, title, completed, id){
        this.store = store
        this.id = id
        this.title = title
        this.completed = completed

        makeObservable(this, {
            title: observable,
            completed: observable,
            toggle: action,
        })
    }


    toggle() {
        this.completed = !this.completed
    }
}