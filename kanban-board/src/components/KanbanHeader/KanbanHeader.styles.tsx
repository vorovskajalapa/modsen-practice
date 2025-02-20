import { BiPlusCircle } from 'react-icons/bi';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f7fafc; /* Нейтральный светлый фон */
  border-bottom: 2px solid #e2e8f0; /* Тонкая граница */
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: -0.013em;
  color: #1e293b;
`;

export const AddButton = styled.button`
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

export const PlusIcon = styled(BiPlusCircle)`
  transform: scale(0.9);
  width: 36px;
  height: 36px;
  color: #1e293b;
`;
