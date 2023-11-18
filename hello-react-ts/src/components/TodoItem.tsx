import {
  Button,
  Card,
  Checkbox,
  Flex,
  Grid,
  Input,
  Stack,
  Text,
} from '@mantine/core';
import Todo from '../models/Todo';
import { Props as ListTodosProps } from './ListTodos';
import { ChangeEvent, useState, KeyboardEvent } from 'react';

type Props = Omit<ListTodosProps, 'todos'> & {
  todo: Todo;
};

function TodoItem({ todo, onCheckTodo, onRemoveTodo, onUpdateTodo }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleCheckChange = (id: Todo['id']) => () => {
    onCheckTodo?.(id, !todo.completed);
  };

  const handleTodoRemove = (id: Todo['id']) => () => {
    onRemoveTodo?.(id);
  };

  const handleDoubleClickTitle = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
      onUpdateTodo?.(todo.id, newTitle);
      console.log({ todo, newTitle });
    }
  };

  const handleNewInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  return (
    <Card key={todo.id}>
      <Grid>
        <Grid.Col span={1}>
          <Flex
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Checkbox
              onChange={handleCheckChange(todo.id)}
              value={`${todo.completed}`}
            ></Checkbox>
          </Flex>
        </Grid.Col>
        <Grid.Col span="auto">
          <Stack gap="md">
            {isEditing ? (
              <Input
                onKeyDown={handleInputKeyDown}
                name="newTitle"
                value={newTitle}
                onChange={handleNewInputChange}
              />
            ) : (
              <Text size="lg" onDoubleClick={handleDoubleClickTitle}>
                {todo.title}
              </Text>
            )}
            {todo.description && <Text size="md">{todo.description}</Text>}
          </Stack>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button onClick={handleTodoRemove(todo.id)}>Remover</Button>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default TodoItem;
