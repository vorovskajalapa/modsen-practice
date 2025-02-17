import { KanbanHeader } from '../layout';
import Board from './Board';
import { KanbanWrapper } from './Kanban.styles';

export const Kanban = () => {
  return (
    <KanbanWrapper>
      <KanbanHeader />
      <Board />
    </KanbanWrapper>
  );
};
