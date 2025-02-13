import React from 'react';
import Board from './Board';
import styled from 'styled-components';
import KanbanHeader from './Headers';

const KanbanWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  color: #fafafa;
`;

const Kanban = () => {
  return (
    <KanbanWrapper>
      <KanbanHeader />
      <Board />
    </KanbanWrapper>
  );
};

export default Kanban;
