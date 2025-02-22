import React from 'react';

import { DropIndicator } from '../DropIndicator';
import { CardContainer, CardText, PriorityBadge } from './Card.styles';

interface CardProps {
  title: string;
  id: string;
  column: string;
  priority?: 'Low' | 'Medium' | 'High';
  handleDragStart: (
    e: React.DragEvent,
    card: { title: string; id: string; column: string; priority?: string }
  ) => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  id,
  column,
  priority = 'Low',
  handleDragStart,
}) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <CardContainer
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column, priority })}
      >
        {priority && (
          <PriorityBadge priority={priority}>{priority}</PriorityBadge>
        )}
        <CardText>{title}</CardText>
      </CardContainer>
    </>
  );
};
