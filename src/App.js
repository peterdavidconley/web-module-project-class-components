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

handleAddTask = (todo) => {

  const newTask = {
    task: todo,
    id: Math.round(Math.random() * 10000000000000),
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
      return (task.completed === false)
    })
  })

}

handleToggleTask = (id) => {
  console.log(this.state.todos)

  this.setState({
 
    todos: this.state.todos.map( todo => {
      if(todo.id === id) {
              return {...todo, completed: !todo.completed}
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
        <TodoList todos={this.state.todos} handleToggleTask={this.handleToggleTask} />
        <button onClick={this.handleClear}>Clear List</button>
      </div>
    );
  }
}

export default App;
