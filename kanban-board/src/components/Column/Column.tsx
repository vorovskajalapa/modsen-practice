import { useState, useRef, DragEvent } from 'react';
import {
  CardList,
  ColumnContainer,
  Count,
  Header,
  Title,
} from './Column.styles';
import { DropIndicator } from '../DropIndicator/DropIndicator';
import { Card } from '../Card';
import { AddCardField } from '../AddCardField';
import { AddCardButton } from '../AddCardButton';
import { useDispatch } from 'react-redux';
import { moveCard } from '../../store/slices/KanbanSlice';

interface ColumnProps {
  title: string;
  bgColor: string;
  cards: CardType[];
  column: string;
}

interface CardType {
  id: string;
  column: string;
  title: string;
  description?: string;
}

export const Column: React.FC<ColumnProps> = ({
  title,
  bgColor,
  cards,
  column,
}) => {
  const [active, setActive] = useState(false);
  const addCardRef = useRef<{ openInput: () => void }>(null);

  const dispatch = useDispatch()

  const handleAddButtonClick = () => {
    addCardRef.current?.openInput();
  };

  const handleDragStart = (e: DragEvent, card: CardType) => {
    e.dataTransfer.setData('cardId', card.id);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");
    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const beforeId = element?.dataset.before || null;

    if (beforeId !== cardId) {
      dispatch(moveCard({ id: cardId, newColumn: column, beforeId }));
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => (i.style.opacity = '0'));
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    if (el.element) {
      el.element.style.opacity = '1';
    }
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;
    return indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        return offset < 0 && offset > closest.offset
          ? { offset, element: child }
          : closest;
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1] as HTMLElement,
      }
    );
  };

  const getIndicators = (): HTMLElement[] => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <ColumnContainer>
      <Header $bgColor={bgColor}>
        <Count>{filteredCards.length}</Count>
        <Title>{title}</Title>
        <AddCardButton onClick={handleAddButtonClick} />
      </Header>
      <CardList
        $active={active}
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {filteredCards.map((c) => (
          <Card key={c.id} {...c} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId={undefined} column={column} />
        <AddCardField
          ref={addCardRef}
          column={column}
          textColor={bgColor}
        />
      </CardList>
    </ColumnContainer>
  );
};
