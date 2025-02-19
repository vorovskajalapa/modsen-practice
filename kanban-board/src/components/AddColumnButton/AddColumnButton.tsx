import { Button, Plus } from "./AddColumnButton.styles";

export const AddColumnButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      <Plus />
      <Plus />
    </Button>
  );
};
