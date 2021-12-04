import React from 'react'
import '../style.css'

const Todo = props => {

   const handleClick = () => {
        props.handleToggleTask(props.todo)
    }
    
        return(
            <div key={props.todo.id} onClick={handleClick} className={props.todo.completed ? ' completed' : ''}>
                <p>{props.todo}</p>
            </div>
        )
    
} 

export default Todo

//props.todo.id = key