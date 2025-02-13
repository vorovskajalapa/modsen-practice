import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f7fafc; /* Нейтральный светлый фон */
  border-bottom: 2px solid #e2e8f0; /* Тонкая граница */
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e293b;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f1f5f9;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const PlusIcon = styled(BiPlusCircle)`
  transform: scale(0.9);
  width: 36px;
  height: 36px;
  color: #1e293b;
`;

const KanbanHeader = () => {
  return (
    <Header>
      <Title>Kanban Dashboard</Title>
      <AddButton>
        <PlusIcon />
      </AddButton>
    </Header>
  );
};

export default KanbanHeader;
