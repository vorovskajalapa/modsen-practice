import { useState } from "react";
import { AddButton, Header, PlusIcon, Title } from "./KanbanHeader.styles";
import { AddColumnModal } from "../AddColumnModal/AddColumnModal";

type KanbanHeaderProps = {
  setColumns: React.Dispatch<
    React.SetStateAction<{ title: string; column: string; bgColor: string }[]>
  >;
};

export const KanbanHeader: React.FC<KanbanHeaderProps> = ({ setColumns }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddColumn = (title: string, bgColor: string) => {
    const newColumn = {
      title,
      column: `column-${Date.now()}`,
      bgColor,
    };
    setColumns((prev) => [...prev, newColumn]);
    setIsModalOpen(false);
  };

  return (
    <>
      <Header>
        <Title>Kanban Dashboard</Title>
        <AddButton onClick={() => setIsModalOpen(true)}>
          <PlusIcon />
        </AddButton>
      </Header>
      {isModalOpen && <AddColumnModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddColumn} />}
    </>
  );
};
