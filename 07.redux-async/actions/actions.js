export const TODOS_LOADED = 'TODOS_LOADED';
export function todosLoaded(todos){
  return {
    type: TODOS_LOADED,
    todos: todos
  };
};


// THUNKS

export function submitTodoAction(text){
  return (dispatch) => {
    if(text && text.length > 0) {
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
      .then(() => {
        dispatch(getTodos()) // dispatch other thunk
      });
    }
    else{
      return Promise.resolve();
    }
  };
}

export function toggleTodoAction(id, checked) {
  return (dispatch) => {
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
    .then(() => dispatch(getTodos()));
  };
}

export function getTodos(){
  return (dispatch) => {
    fetch('/todos')
      .then(response => response.json())
      .then((todos) => {
        dispatch(todosLoaded(todos))
      });
  }
}
