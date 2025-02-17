import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 0.5rem;
  width: 100%;
  background: white;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input<{ $color: string }>`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.875rem;
  color: ${(props) => props.$color};
  &::placeholder {
    color: ${(props) => props.$color}80; /* Полупрозрачный */
  }
`;

export const AddTaskButton = styled.button<{ $color: string }>`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: ${(props) => props.$color};
  background: white;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #f3f4f6;
  }
`;
