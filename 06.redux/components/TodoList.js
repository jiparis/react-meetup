import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="todo-list">
        {
          this.props.todos.map (todo =>
              <TodoItem
                key={todo.id}
                onTodoClick={this.props.onTodoClick}
                {...todo} />
          )
        }
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string,
    done: PropTypes.bool
  })).isRequired,
  onTodoClick: PropTypes.func.isRequired
}
