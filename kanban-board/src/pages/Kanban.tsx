import { useState } from 'react';
import { KanbanWrapper } from './Kanban.styles';
import { Board } from '../components/Board';
import { KanbanHeader } from '../components/KanbanHeader';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

type Card = {
  title: string;
  id: string;
  column: string;
};

type Column = {
  title: string;
  column: string;
  bgColor: string;
};

export const Kanban = () => {
  const [cards, setCards] = useState<Card[]>();
  const [columns, setColumns] = useState<Column[]>();
  const columnsss = useSelector((state: RootState) => state.kanban.columns);
  const cardsss = useSelector((state: RootState) => state.kanban.cards);

  const dispatch = useDispatch();

  return (
    <KanbanWrapper>
      <KanbanHeader />
      <Board columns={columnsss} cards={cardsss} setCards={setCards} />
    </KanbanWrapper>
  );
};
