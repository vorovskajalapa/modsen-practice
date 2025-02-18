import { Button, Plus } from './AddButton.styles';

export const AddButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      <Plus />
      <Plus />
    </Button>
  );
};
