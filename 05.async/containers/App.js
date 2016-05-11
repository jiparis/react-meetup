import React, { Component, PropTypes } from 'react';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import 'whatwg-fetch';

/**
 * App represents the main container.
 */
export default class App extends Component{
  constructor(){
    super();
    this.state = { todos: [] };

    // no autobinding for ES6 :(
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  refreshData(){
    fetch('/todos')
      .then(response => response.json())
      .then((todos) => {
        this.setState({ todos: todos });
      });
  }

  componentDidMount(){
    // GET TODOS from API
    this.refreshData();
  }

  addTodo(text){
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        todo: text,
        done: false
      })
    })

    this.refreshData();
  }

  toggleTodo(id, checked){
    fetch('/todos/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        done: checked
      })
    })
    this.refreshData();
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
