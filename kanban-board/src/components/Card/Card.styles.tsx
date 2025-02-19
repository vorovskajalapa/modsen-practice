import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardContainer = styled(motion.div)`
  cursor: grab;
  background: #f5f5dc;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:active {
    cursor: grabbing;
  }
`;

export const CardText = styled.p`
  font-size: 0.875rem;
  color: #333;
`;
