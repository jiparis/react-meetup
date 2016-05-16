import {TODOS_LOADED} from '../actions/actions';

export default function(state = { todos: [] }, action){
  switch(action.type){
    case TODOS_LOADED:
      return Object.assign({}, state, { todos: action.todos });

    default:
      // no changes
      return state;
  }
}
