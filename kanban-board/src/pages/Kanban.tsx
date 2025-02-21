import { useSelector } from 'react-redux';

import { Board } from '../components/Board';
import { KanbanHeader } from '../components/KanbanHeader';
import { RootState } from '../store/store';
import { KanbanWrapper } from './Kanban.styles';

export const Kanban = () => {
  const columns = useSelector((state: RootState) => state.kanban.columns);
  const cards = useSelector((state: RootState) => state.kanban.cards);

  return (
    <KanbanWrapper>
      <KanbanHeader />
      <Board columns={columns} cards={cards} />
    </KanbanWrapper>
  );
};
