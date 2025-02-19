import { useState } from 'react';
import { KanbanWrapper } from './Kanban.styles';
import { Board } from '../components/Board';
import { KanbanHeader } from '../components/KanbanHeader';

type Card = {
  title: string;
  id: string;
  column: string;
};

type Column = {
  title: string;
  column: string;
  bgColor: string;
}

const DEFAULT_CARDS: Card[] = [
  { title: 'Добавляйте новые задания!', id: '1', column: 'todo' },
];

const DEFAULT_COLUMNS = [
  { title: 'Backlog', column: 'backlog', bgColor: '#4F46E5' },
  { title: 'TODO', column: 'todo', bgColor: '#F59E0B' },
  { title: 'In Progress', column: 'doing', bgColor: '#22C55E' },
  { title: 'Done', column: 'done', bgColor: '#10B981' },
];

export const Kanban = () => {
  const [cards, setCards] = useState<Card[]>(DEFAULT_CARDS);
  const [columns, setColumns] = useState<Column[]>(DEFAULT_COLUMNS)

  return (
    <KanbanWrapper>
      <KanbanHeader setColumns={setColumns} />
      <Board columns={columns} cards={cards} setCards={setCards} />
    </KanbanWrapper>
  );
};