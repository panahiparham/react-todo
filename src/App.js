import { React, Component } from "react";

import { observer } from "mobx-react";


import "./App.css";

import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import TodoFooter from './components/TodoFooter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="todoapp" className="todoapp">

          <TodoEntry />

          <TodoItems />

          <TodoFooter />

        </div>
      </div>
    );
  }
}

App = observer(App);

export default App;
