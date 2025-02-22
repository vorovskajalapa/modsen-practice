import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: #ef4444;
  font-size: 1.25rem;
  margin-right: 0.5rem;

  &:hover {
    color: #dc2626;
  }
`;

export const ButtonWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ColumnContainer = styled.div`
  width: 18rem;
  flex-shrink: 0;
`;

export const Header = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: #ffffff;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Count = styled.span`
  background: white;
  color: #4f46e5;
  border-radius: 9999px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.007em;
  margin-left: 0.5rem;
`;

export const CardList = styled.div<{ $active: boolean }>`
  width: 100%;
  background-color: #edf1ff;
  padding: 0.5rem;
  border-radius: 8px;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 8px;

  min-height: 50px;
  height: auto;
`;
