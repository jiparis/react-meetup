import React, { Component, PropTypes } from 'react';

export default class TodoItem extends Component{
  constructor(props){
    super(props);

    this.todoClicked = this.todoClicked.bind(this);
  }

  todoClicked(obj){
    const checked = obj.target.checked;
    this.props.onTodoClick(this.props.id, checked);
  }

  render(){
    const name = 'todo-' + this.props.id;
    return (
      <div className="todo-item">
        <input
          name={name}
          type="checkbox"
          checked={this.props.done}
          onChange={this.todoClicked}/>
        {this.props.todo}
      </div>
    );
  }
}
