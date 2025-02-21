import { KanbanWrapper } from './Kanban.styles';
import { Board } from '../components/Board';
import { KanbanHeader } from '../components/KanbanHeader';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';


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
