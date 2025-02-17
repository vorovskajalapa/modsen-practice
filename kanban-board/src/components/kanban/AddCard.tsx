import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { AddTaskButton, FormContainer, Input } from './AddCard.styles';

interface Card {
  column: string;
  title: string;
  id: string;
}

interface AddCardProps {
  column: string;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  textColor: string;
}

const AddCard: React.FC<AddCardProps> = ({ column, setCards, textColor }) => {
  const [text, setText] = useState('');
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim().length) return;

    const newCard: Card = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((prev) => [...prev, newCard]);
    setAdding(false);
  };

  return adding ? (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        $color={textColor}
        onChange={(e) => setText(e.target.value)}
        autoFocus
        placeholder="Add task..."
      />
    </FormContainer>
  ) : (
    <AddTaskButton $color={textColor} onClick={() => setAdding(true)}>
      <FiPlus />
      <span>Add task...</span>
    </AddTaskButton>
  );
};

export default AddCard;
