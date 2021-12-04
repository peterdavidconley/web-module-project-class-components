import React from 'react'

const Todo = props => {

   const handleClick = () => {
        props.handleToggleTask(props.todo)
    }
    
        return(
            <div onClick={handleClick}>
                <p>{props.todo}</p>
            </div>
        )
    
} 

export default Todo