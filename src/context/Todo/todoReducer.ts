import { TodoState } from './TodoProvider';

//* Interface
import { ToDo } from 'interfaces/Todo';

type TodoAction =
  | {
      type: 'ADD_TODO';
      payload: ToDo;
    }
  | {
      type: 'EDIT_TODO';
      payload: ToDo;
    };

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'EDIT_TODO':
      return {
        ...state,
        list: state.list.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };

    default:
      return state;
  }
};
