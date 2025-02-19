import { useState } from 'react';
import { Column } from '../Column';
import { BoardContainer } from './Board.styles';
import { KanbanHeader } from '../KanbanHeader';

const DEFAULT_CARDS = [
  { title: 'Создать базовую структуру проекта', id: '1', column: 'backlog' },
  { title: 'Настроить Webpack/Vite для сборки', id: '2', column: 'backlog' },
  { title: 'Настроить TypeScript в проекте', id: '3', column: 'backlog' },
  { title: 'Добавить ESLint, Prettier и Husky', id: '4', column: 'backlog' },
  { title: 'Создать компоненты колонок Kanban', id: '5', column: 'todo' },
  { title: 'Реализовать добавление/удаление колонок', id: '6', column: 'todo' },
  { title: 'Реализовать добавление/редактирование карточек', id: '7', column: 'todo' },
  { title: 'Реализовать Drag and Drop для перемещения карточек', id: '8', column: 'doing' },
  { title: 'Настроить хранение данных в localStorage', id: '9', column: 'doing' },
  { title: 'Добавить функционал подсчета карточек в колонках', id: '10', column: 'doing' },
  { title: 'Добавить выбор цвета для названий колонок', id: '11', column: 'doing' },
  { title: 'Добавить поддержку приоритетов задач (Low, Medium, High)', id: '12', column: 'doing' },
  { title: 'Реализовать Error Boundaries', id: '13', column: 'doing' },
  { title: 'Реализовать адаптивную верстку до 390px', id: '14', column: 'doing' },
  { title: 'Оптимизировать рендеринг и производительность', id: '15', column: 'done' },
  { title: 'Задеплоить проект на GitHub Pages/Netlify', id: '16', column: 'done' },
];

const DEFAULT_COLUMNS = [
  { title: 'Backlog', column: 'backlog', bgColor: '#4F46E5' },
  { title: 'TODO', column: 'todo', bgColor: '#F59E0B' },
  { title: 'In Progress', column: 'doing', bgColor: '#22C55E' },
];

const Board = ({ columns, initialCards }) => {
  const [cards, setCards] = useState(initialCards);
  const [columns, setColumns] = useState(columns);

  return (
    <BoardContainer>
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

export const Kanban = () => {
  return (
    <KanbanWrapper>
      <KanbanHeader setColumns={set} />
      <Board columns={DEFAULT_COLUMNS} initialCards={DEFAULT_CARDS} />
    </KanbanWrapper>
  );
};
