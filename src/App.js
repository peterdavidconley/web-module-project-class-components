import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todos =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todos: todos,
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

handleAddTask = (task) => {

  const newTask = {
    task: task,
    id: Date.now,
    completed: false
  }

  this.setState({
    ...this.state,
    todos: [...this.state.todos, newTask]
  })
}

handleClear = () => {
  this.setState({
    ...this.state,
    todos: this.state.todos.filter( task => {
      return (task.completed === true)
    })
  })

}

handleToggleTask = (task) => {
  console.log(todos)

  this.setState({
    ...this.state,
    todos: this.state.todos.map( todo => {
      if(todo.id === task.id) {
              return {...todo, purchased: todo.completed? false: true}
            } else { return todo }
    })
  })

}

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddTask={this.handleAddTask}/>
        </div>
        <TodoList todos={this.state.todos} handleToggleTask={this.handleToggleTask}/>
        <button onClick={this.handleClear}>Clear List</button>
      </div>
    );
  }
}

export default App;
