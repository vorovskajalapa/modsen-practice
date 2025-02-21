import { useState, forwardRef, useImperativeHandle } from 'react';
import { FiPlus } from 'react-icons/fi';
import { FormContainer, AddTaskButton, Input } from './AddCardField.styles';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/slices/KanbanSlice';
import { CardType } from '../../types';

interface AddCardProps {
  column: string;
  textColor: string;
}

export const AddCardField: React.FC<AddCardProps> = forwardRef(
  ({ column, textColor }: AddCardProps, ref) => {
    const [text, setText] = useState('');
    const [adding, setAdding] = useState(false);

    const dispatch = useDispatch()

    useImperativeHandle(ref, () => ({
      openInput: () => setAdding(true),
    }));

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!text.trim().length) return;

      const newCard: CardType = {
        column,
        title: text.trim(),
        id: Math.random().toString(),
      };

      dispatch(addCard(newCard));
      setAdding(false);
      setText('');
    };

    const handleBlur = () => {
      setAdding(false);
    };

    return adding ? (
      <FormContainer onSubmit={handleSubmit}>
        <Input
          $color={textColor}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
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
  }
);
