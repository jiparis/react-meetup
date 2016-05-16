import React, { Component, PropTypes } from 'react';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

import {connect} from 'react-redux';

import {
  submitTodoAction,
  toggleTodoAction,
  getTodos} from '../actions/actions';

class App extends Component{
  constructor(){
    super();

    // no autobinding for ES6 :(
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(text){
    this.props.dispatch(
      submitTodoAction(text)
    );
  }

  toggleTodo(id, checked){
    this.props.dispatch(
      toggleTodoAction(id, checked)
    );
  }

  componentDidMount(){
    this.props.dispatch(
      getTodos()
    );
  }

  render(){
    return (
      <div>
        <h1>Mimimal Todo List App</h1>
        <AddTodo onTodoAdded={this.addTodo}/>
        <TodoList todos={this.props.todos} onTodoClick={this.toggleTodo}/>
      </div>
    );
  }
}

// Map REDUX STATE to component properties
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

// Used to hook Redux into our container component
export default connect(
  mapStateToProps
)(App);
