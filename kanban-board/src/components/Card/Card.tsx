import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DropIndicator } from '../DropIndicator';
import {
  CardContainer,
  CardText,
  PriorityBadge,
  DropdownMenu,
  DropdownItem,
} from './Card.styles';
import { updateCardPriority } from '../../store/slices/KanbanSlice';

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
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handlePriorityChange = (newPriority: 'Low' | 'Medium' | 'High') => {
    dispatch(updateCardPriority({ id, priority: newPriority }));
    setDropdownOpen(false);
  };

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
          <PriorityBadge priority={priority} onClick={toggleDropdown}>
            {priority}
          </PriorityBadge>
        )}
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem
              onClick={() => handlePriorityChange('Low')}
              priority="Low"
            >
              Low
            </DropdownItem>
            <DropdownItem
              onClick={() => handlePriorityChange('Medium')}
              priority="Medium"
            >
              Medium
            </DropdownItem>
            <DropdownItem
              onClick={() => handlePriorityChange('High')}
              priority="High"
            >
              High
            </DropdownItem>
          </DropdownMenu>
        )}
        <CardText>{title}</CardText>
      </CardContainer>
    </>
  );
};
