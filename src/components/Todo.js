import React from 'react'

const Todo = props => {

    handleClick = () => {
        props.handleToggleTask(props.todo.task)
    }
    
        return(
            <div onClick={handleClick}>
                <p>{props.todo}</p>
            </div>
        )
    
} 

export default Todo