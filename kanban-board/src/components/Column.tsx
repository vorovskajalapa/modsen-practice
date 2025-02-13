import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import DropIndicator from './DropIndicator';
import AddCard from './AddCard';
import AddButton from './AddButton'; // Новый компонент кнопки "+"

const ColumnContainer = styled.div`
  width: 18rem; /* Было 14rem, теперь 18rem */
  flex-shrink: 0;
`;

const Header = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: #ffffff;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Count = styled.span`
  background: white;
  color: #4f46e5;
  border-radius: 9999px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
`;

const Title = styled.h3`
  font-weight: 500;
  margin-left: 0.5rem;
`;

const CardList = styled.div<{ $active: boolean }>`
  height: 100%;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  background-color: #e2e8f0; /* Чуть темнее F7FAFC */
  padding: 0.5rem;
  border-radius: 8px;
  margin-top: 1rem; /* Увеличенный отступ */
`;

const Column = ({ title, bgColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('cardId', card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData('cardId');

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || '-1';

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === '-1';

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => (i.style.opacity = '0'));
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = '1';
  };

  const getNearestIndicator = (e, indicators) => {
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
        element: indicators[indicators.length - 1],
      }
    );
  };

  const getIndicators = () => {
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
        <AddButton />
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
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} textColor={bgColor} />
      </CardList>
    </ColumnContainer>
  );
};

export default Column;
