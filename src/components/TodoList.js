import React from 'react'
import Todo from './Todo'

const TodoList = props => {

        return(
            <div>
                {props.todos.map( todo => 
                (<h3>Testing TodoList</h3>))}
            </div>
        )
}

export default TodoList