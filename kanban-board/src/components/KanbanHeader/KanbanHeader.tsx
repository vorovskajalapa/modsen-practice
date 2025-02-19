import { AddButton, Header, PlusIcon, Title } from './KanbanHeader.styles';

type KanbanHeaderProps = {
  setColumns: React.Dispatch<
    React.SetStateAction<{ title: string; column: string; bgColor: string }[]>
  >;
};

export const KanbanHeader: React.FC<KanbanHeaderProps> = ({ setColumns }) => {
  const addColumn = () => {
    const newColumn = {
      title: `Column ${Date.now()}`,
      column: `column-${Date.now()}`,
      bgColor: '#888888',
    };
    setColumns((prev) => [...prev, newColumn]);
  };

  return (
    <Header>
      <Title>Kanban Dashboard</Title>
      <AddButton onClick={addColumn}>
        <PlusIcon />
      </AddButton>
    </Header>
  );
};
