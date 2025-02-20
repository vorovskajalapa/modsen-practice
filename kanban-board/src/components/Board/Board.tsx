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
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
};

export const Board: React.FC<BoardProps> = ({ columns, cards, setCards }) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!boardRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - boardRef.current.offsetLeft;
    scrollLeft.current = boardRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !boardRef.current) return;
    e.preventDefault();
    const x = e.pageX - boardRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    boardRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <BoardContainer
      ref={boardRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      {columns.map(({ title, column, bgColor }) => (
        <Column
          key={column}
          title={title}
          column={column}
          bgColor={bgColor}
          cards={cards}
          setCards={setCards}
        />
      ))}
    </BoardContainer>
  );
};
