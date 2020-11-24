import { makeObservable, observable, computed, action } from "mobx";

class Store {

    constructor(){
        this.time = new Date()
        this.interval = setInterval(()=>{
            this.time = new Date()
        }, 1000)

        makeObservable(this, {
            time: observable,
            pauseClock: action,
            startClock: action,
        })
    }

    pauseClock(){
        clearInterval(this.interval)
    }

    startClock(){
        this.interval = setInterval(()=>{
            this.time = new Date()
        }, 1000)
    }


}

const store = new Store()
export default store