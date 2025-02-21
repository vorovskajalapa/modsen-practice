import { useState } from 'react';

import {
  Button,
  ButtonGroup,
  ColorInput,
  Input,
  ModalContainer,
  Overlay,
  Title,
} from './AddColumnModal.styles';

interface AddColumnModalProps {
  onClose: () => void;
  onSubmit: (title: string, bgColor: string) => void;
}

export const AddColumnModal: React.FC<AddColumnModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');
  const [bgColor, setBgColor] = useState('#888888');

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit(title, bgColor);
  };

  return (
    <Overlay>
      <ModalContainer>
        <Title>Добавить колонку</Title>
        <Input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ColorInput
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <ButtonGroup>
          <Button onClick={onClose} $variant="cancel">
            Отмена
          </Button>
          <Button onClick={handleSubmit} $variant="submit">
            Добавить
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};
