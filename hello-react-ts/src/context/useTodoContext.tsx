import { ReactNode, useContext, useReducer } from 'react';
import Todo from '../models/Todo';
import ContextTodo from './ContextTodo';
import { nanoid } from 'nanoid';

type Props = {
  children: ReactNode;
};

type State = Todo[];

enum ActionTypeEnum {
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  CREATE = 'CREATE',
  CHECK = 'CHECK',
}

type Action =
  | {
      type: ActionTypeEnum.UPDATE;
      todoId: string;
      newTitle: string;
    }
  | {
      type: ActionTypeEnum.DELETE;
      todoId: string;
    }
  | {
      type: ActionTypeEnum.CREATE;
      newTitle: string;
    }
  | {
      type: ActionTypeEnum.CHECK;
      todoId: string;
    };

function todoReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypeEnum.CREATE: {
      return [
        ...state,
        { id: nanoid(), title: action.newTitle, completed: false },
      ];
    }
    case ActionTypeEnum.DELETE: {
      return state.reduce((previous, current) => {
        if (current.id === action.todoId) {
          return previous;
        }
        return [...previous, current];
      }, [] as Todo[]);
    }
    case ActionTypeEnum.UPDATE: {
      return state.reduce((previous, current) => {
        if (current.id === action.todoId) {
          return [...previous, { ...current, title: action.newTitle }];
        }
        return [...previous, current];
      }, [] as Todo[]);
    }
    case ActionTypeEnum.CHECK: {
      return state.reduce((previous, current) => {
        if (current.id === action.todoId) {
          return [...previous, { ...current, completed: !current.completed }];
        }
        return [...previous, current];
      }, [] as Todo[]);
    }
    default:
      throw new Error('Type is not assignable to `ActionTypeEnum`');
  }
}

export function TodoProvider({ children }: Props) {
  const [todos, dispatch] = useReducer(todoReducer, [] as Todo[]);

  const createTodo = (newTitle: string) =>
    dispatch({
      type: ActionTypeEnum.CREATE,
      newTitle,
    });

  const updateTodo = (todoId: string, newTitle: string) =>
    dispatch({
      type: ActionTypeEnum.UPDATE,
      newTitle,
      todoId,
    });

  const deleteTodo = (todoId: string) =>
    dispatch({
      type: ActionTypeEnum.DELETE,
      todoId,
    });

  const checkTodo = (todoId: string) =>
    dispatch({
      type: ActionTypeEnum.CHECK,
      todoId,
    });

  return (
    <ContextTodo.Provider
      value={{
        todos,
        createTodo,
        updateTodo,
        deleteTodo,
        checkTodo,
      }}
    >
      {children}
    </ContextTodo.Provider>
  );
}

const useTodoContext = () => {
  const context = useContext(ContextTodo);

  if (!context) {
    throw new Error('You must provide `TodoProvider`');
  }

  return context;
};

export default useTodoContext;
