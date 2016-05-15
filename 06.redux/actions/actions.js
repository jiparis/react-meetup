export function addTodoAction(todo){
  return {
    type: 'ADD_TODO',
    todo: todo
  };
};

export function toggleTodoAction(id, checked){
  return {
    type: 'TOGGLE_TODO',
    id: id,
    done: checked
  };
};
