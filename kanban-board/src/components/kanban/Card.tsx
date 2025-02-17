import React from 'react';
import { CardContainer, CardText } from './Card.styles';
import { DropIndicator } from '../common/DropIndicator';

interface CardProps {
  title: string;
  id: string;
  column: string;
  handleDragStart: (
    e: React.DragEvent,
    card: { title: string; id: string; column: string }
  ) => void;
}

const Card: React.FC<CardProps> = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <CardContainer
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
      >
        <CardText>{title}</CardText>
      </CardContainer>
    </>
  );
};

export default Card;
