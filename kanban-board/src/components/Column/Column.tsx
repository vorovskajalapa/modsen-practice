import { useState, useRef, DragEvent } from 'react';
import { CardList, ColumnContainer, Count, Header, Title } from './Column.styles';
import { DropIndicator } from '../DropIndicator/DropIndicator';
import { AddButton } from '../KanbanHeader/KanbanHeader.styles';
import { Card } from '../Card';
import { AddCardField } from '../AddCardField';

interface ColumnProps {
  title: string;
  bgColor: string;
  cards: CardType[];
  column: string;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
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
  setCards,
}) => {
  const [active, setActive] = useState(false);
  const addCardRef = useRef<{ openInput: () => void }>(null);

  const handleAddButtonClick = () => {
    addCardRef.current?.openInput();
  };

  const handleDragStart = (e: DragEvent, card: CardType) => {
    e.dataTransfer.setData('cardId', card.id);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData('cardId');
    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element?.dataset.before || '-1';

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      if (before === '-1') {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === -1) return;
        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
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
        <AddButton onClick={handleAddButtonClick} />
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
        <AddCardField ref={addCardRef} column={column} setCards={setCards} textColor={bgColor} />
      </CardList>
    </ColumnContainer>
  );
};
