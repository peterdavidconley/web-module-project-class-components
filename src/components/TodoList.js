import React from 'react'
import Todo from './Todo'

const TodoList = props => {

        return(
            <div>
                <h2>Task List</h2>
                {props.todos.map( todo => (
                 <div>
                 <Todo todo={todo.task} key={todo.id}/>
                 </div>
                ))
            }
            </div>
        )
}

export default TodoList

// <Todo todo={todo.task} key={todo.id}/>