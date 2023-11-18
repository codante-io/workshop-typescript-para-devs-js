import NewTask from './components/NewTask';
import ListTodos from './components/ListTodos';
import { Container } from '@mantine/core';
import useTodoContext from './context/useTodoContext';

function App() {
  const { todos, createTodo, deleteTodo, checkTodo, updateTodo } =
    useTodoContext();

  return (
    <Container>
      <NewTask onSubmit={createTodo} />
      <ListTodos
        todos={todos}
        onCheckTodo={checkTodo}
        onRemoveTodo={deleteTodo}
        onUpdateTodo={updateTodo}
      />
    </Container>
  );
}

export default App;
