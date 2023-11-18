import { ChangeEvent, FormEvent, useState } from 'react';
import { TextInput, Button, SimpleGrid, Center } from '@mantine/core';

type Props = {
  onSubmit?: (title: string) => void;
};

function NewTask({ onSubmit }: Props) {
  const [title, setTitle] = useState('');

  const handleTitleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit?.(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid cols={2} spacing="xl" w="100%" mb={40}>
        <TextInput
          name="title"
          label="Título da Tarefa"
          description="Descreva a tarefa de forma resumida"
          onChange={handleTitleInputChange}
          value={title}
        ></TextInput>
        <Center>
          <Button w="100%" type="submit">
            Cadastrar
          </Button>
        </Center>
      </SimpleGrid>
    </form>
  );
}

export default NewTask;
