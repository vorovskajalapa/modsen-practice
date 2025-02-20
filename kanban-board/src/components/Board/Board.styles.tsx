import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  height: 80%;
  gap: 16px;
  padding: 16px;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;
