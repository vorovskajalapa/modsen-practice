import styled from 'styled-components';

const Button = styled.button`
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

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Plus = styled.span`
  position: absolute;
  background: white;

  &:first-child {
    width: 12px;
    height: 2px;
  }

  &:last-child {
    width: 2px;
    height: 12px;
  }
`;

const AddButton = () => {
  return (
    <Button>
      <Plus />
      <Plus />
    </Button>
  );
};

export default AddButton;
