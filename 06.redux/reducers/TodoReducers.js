let nextId = 0;
export default function(state = {}, action){
  switch(action.type){
    case 'ADD_TODO':
      if (!action.todo || action.todo.length == 0)
        return state;

      let newTodos = state.todos.slice(0, state.todos.length);
      newTodos.unshift({
        id: nextId++,
        todo: action.todo,
        checked: false
      });
      // need to return a NEW object to trigger state change
      return Object.assign({}, state, { todos: newTodos });

    case 'TOGGLE_TODO':
      newTodos = state.todos.map((item) => {
        if(item.id == action.id)
          item.checked = action.done;

        return item;
      });

      return Object.assign({}, state, { todos : newTodos });

    default:
      // no changes
      return state;
  }
}
