import { AddButton, Header, PlusIcon, Title } from './KanbanHeader.styles';

export const KanbanHeader = () => {
  return (
    <Header>
      <Title>Kanban Dashboard</Title>
      <AddButton>
        <PlusIcon />
      </AddButton>
    </Header>
  );
};
