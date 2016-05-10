import React, { Component, PropTypes } from 'react';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

// Our static "database"
let nextId = 0;
const todoList = [
  { id: nextId++, todo: 'Learn react', done: false },
  { id: nextId++, todo: 'Buy a beer for Jose I.', done: false }
];

/**
 * App represents the main container.
 */
export default class App extends Component{
  constructor(){
    super();
    this.state = { todos: todoList };

    // no autobinding for ES6 :(
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(text){
    todoList.unshift({
      id: nextId++,
      todo: text,
      done: false
    });
    this.setState({ todos: todoList });
  }

  toggleTodo(id, checked){
    const item = todoList.find(el => el.id === id);
    item.done = checked
    this.setState({ todos: todoList });
  }

  render(){
    return (
      <div>
        <h1>Mimimal Todo List App</h1>
        <AddTodo onTodoAdded={this.addTodo}/>
        <TodoList todos={this.state.todos} onTodoClick={this.toggleTodo}/>
      </div>
    );
  }
}
