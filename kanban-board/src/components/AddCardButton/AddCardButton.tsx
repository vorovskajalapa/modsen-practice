import { Button, Plus } from './AddCardButton.styles';

export const AddCardButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      <Plus />
      <Plus />
    </Button>
  );
};
