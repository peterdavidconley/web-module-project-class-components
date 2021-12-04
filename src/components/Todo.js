import React from 'react'

const Todo = props => {

   const handleClick = () => {
        props.handleToggleTask(props.todo)
    }
    
        return(
            <div onClick={handleClick} className={props.todo.completed ? ' completed' : ''}>
                <p>{props.todo}</p>
            </div>
        )
    
} 

export default Todo