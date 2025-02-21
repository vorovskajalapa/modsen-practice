import { useState } from "react";
import { AddButton, Header, PlusIcon, Title } from "./KanbanHeader.styles";
import { AddColumnModal } from "../AddColumnModal/AddColumnModal";
import { useDispatch } from "react-redux";
import { addColumn } from "../../store/slices/KanbanSlice";


export const KanbanHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleAddColumn = (title: string, bgColor: string) => {
    const newColumn = {
      title,
      column: `column-${Date.now()}`,
      bgColor,
    };
    dispatch(addColumn(newColumn))
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
