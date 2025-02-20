import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid white;
  background: transparent;
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Plus = styled.span`
  position: absolute;
  background: white;

  &:first-child {
    width: 12px;
    height: 2px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:last-child {
    width: 2px;
    height: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
