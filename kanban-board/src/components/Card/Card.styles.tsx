import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardContainer = styled(motion.div)`
  cursor: grab;
  background: #ffffff;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  border-left: 6px solid transparent;

  &:active {
    cursor: grabbing;
  }
`;

export const CardText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  letter-spacing: 0;
  color: #333;
`;

export const PriorityBadge = styled.span<{ priority: string }>`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.005em;
  text-align: center;
  padding: 4px 8px;
  border-radius: 16px;
  margin-bottom: 8px;
  background-color: #edf1ff;


  cursor: pointer;


  color: ${({ priority }) =>
    priority === 'High'
      ? '#EF4444'
      : priority === 'Medium'
        ? '#F59E0B'
        : '#22C55E'};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  width: 100px;
`;

export const DropdownItem = styled.div<{ priority: string }>`
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ priority }) =>
    priority === 'High'
      ? '#EF4444'
      : priority === 'Medium'
        ? '#F59E0B'
        : '#22C55E'};

  &:hover {
    background-color: #f0f0f0;
  }
`;
