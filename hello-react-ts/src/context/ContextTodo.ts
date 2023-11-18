import { createContext } from 'react';
import Todo from '../models/Todo';

type Context = {
  todos: Todo[];
  createTodo: (title: string) => void;
  updateTodo: (todoId: string, newTitle: string) => void;
  deleteTodo: (todoId: string) => void;
  checkTodo: (todoId: string, completed: boolean) => void;
};

const initialValue = {
  todos: [],
  createTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  checkTodo: () => {},
};

const ContextTodo = createContext<Context>(initialValue);

export default ContextTodo;
