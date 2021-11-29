import React from 'react'

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
          input: '',
        }
      }

      handleChanges = e => {
        this.setState({
          ...this.state,
          input: e.target.value
        })
      };
    
      handleClick = (e) => {
        e.preventDefault();
        this.props.handleAddTask(this.state.input);
      }

    render() {
    return(
        <form>
            <input 
            placeholder='Add task'
            type='text'
            name='task'
            onChange={this.handleChanges}
            />
            <button onClick={this.handleClick}>Add</button>
        </form>
    )
    }
}

export default TodoForm