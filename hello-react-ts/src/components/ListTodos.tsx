import Todo from '../models/Todo';
import TodoItem from './TodoItem';

// const sum = (a: number) => (b: number) => a + b;

// Aplicação Parcial

// const add = sum(1)

// add(2)

export type Props = {
  todos: Todo[];
  onCheckTodo?: (todoId: Todo['id'], completed: boolean) => void;
  onRemoveTodo?: (todoId: Todo['id']) => void;
  onUpdateTodo?: (todoId: Todo['id'], newTitle: string) => void;
};

function ListTodos({ todos, onCheckTodo, onRemoveTodo, onUpdateTodo }: Props) {
  return todos.map((todo) => (
    <TodoItem
      todo={todo}
      onCheckTodo={onCheckTodo}
      onRemoveTodo={onRemoveTodo}
      onUpdateTodo={onUpdateTodo}
    />
  ));
}

export default ListTodos;
