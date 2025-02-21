import { useRef, useState } from 'react';
import { Column } from '../Column';
import { BoardContainer } from './Board.styles';

type Card = {
  title: string;
  id: string;
  column: string;
};

type ColumnData = {
  title: string;
  column: string;
  bgColor: string;
};

type BoardProps = {
  columns: ColumnData[];
  cards: Card[];
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
