import { CardType, ColumnType } from '../../types';
import { Column } from '../Column';
import { BoardContainer } from './Board.styles';

type BoardProps = {
  columns: ColumnType[];
  cards: CardType[];
};

export const Board: React.FC<BoardProps> = ({ columns, cards }) => {
  return (
    <BoardContainer>
      {columns.map(({ title, column, bgColor }) => (
        <Column
          key={column}
          title={title}
          column={column}
          bgColor={bgColor}
          cards={cards}
        />
      ))}
    </BoardContainer>
  );
};
