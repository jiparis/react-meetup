import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component{

  addTodo(ev){
    ev.preventDefault();

    const value = this.refs.textInput.value;
    this.props.onTodoAdded(value);

    this.refs.textInput.value = '';
  }

  render(){
    return(
      <form className="add-todo" onSubmit={this.addTodo.bind(this)}>
        <input
          ref="textInput"
          type="text"
          name="todoinput"
          placeholder="New task" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  onTodoAdded: PropTypes.func.isRequired
}
