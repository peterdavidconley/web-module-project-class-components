import React from 'react'

class TodoForm extends React.Component {

    render() {
    return(
        <form>
            <input 
            placeholder='Add task'
            type='text'
            />
            <button>Add</button>
        </form>
    )
    }
}

export default TodoForm