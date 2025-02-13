import React from 'react';
import styled from 'styled-components';
import DropIndicator from './DropIndicator';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  cursor: grab;
  background: #f5f5dc; /* Бежевый */
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:active {
    cursor: grabbing;
  }
`;

const CardText = styled.p`
  font-size: 0.875rem;
  color: #333;
`;

const Card = ({ title, id, column, handleDragStart }) => {
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
