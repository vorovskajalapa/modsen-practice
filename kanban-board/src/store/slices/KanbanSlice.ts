import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Card = {
  title: string;
  id: string;
  column: string;
};

type Column = {
  title: string;
  column: string;
  bgColor: string;
};

interface KanbanState {
  cards: Card[];
  columns: Column[];
}

const loadInitialState = (): KanbanState => {
  const savedState = localStorage.getItem("kanbanState");
  return savedState ? JSON.parse(savedState) : initialState;
};

const initialState: KanbanState = {
  cards: [
    { title: "Set up Redux", id: "1", column: "backlog" },
    { title: "Create Kanban UI", id: "2", column: "backlog" },
    { title: "Implement Drag & Drop", id: "3", column: "todo" },
    { title: "Connect Redux with UI", id: "4", column: "todo" },
    { title: "Fix state persistence issue", id: "5", column: "doing" },
    { title: "Optimize performance", id: "6", column: "doing" },
    { title: "Deploy to production", id: "7", column: "done" },
    { title: "Write documentation", id: "8", column: "done" },
  ],
  columns: [
    { title: "Backlog", column: "backlog", bgColor: "#4F46E5" },
    { title: "To Do", column: "todo", bgColor: "#F59E0B" },
    { title: "In Progress", column: "doing", bgColor: "#22C55E" },
    { title: "Done", column: "done", bgColor: "#10B981" },
  ],
};


const kanbanSlice = createSlice({
  name: "kanban",
  initialState: loadInitialState(),
  reducers: {
    addColumn: (state, action: PayloadAction<{ title: string; bgColor: string }>) => {
      const newColumn = {
        title: action.payload.title,
        column: `column-${Date.now()}`,
        bgColor: action.payload.bgColor,
      };
      state.columns.push(newColumn);
      saveState(state);
    },
    addCard: (state, action: PayloadAction<{ title: string; column: string }>) => {
      const newCard = {
        id: (state.cards.length + 1).toString(),
        title: action.payload.title,
        column: action.payload.column,
      };
      state.cards.push(newCard);
      saveState(state);
    },
    moveCard: (state, action: PayloadAction<{ id: string; newColumn: string; beforeId: string | null }>) => {
      const { id, newColumn, beforeId } = action.payload;

      const cardIndex = state.cards.findIndex((card) => card.id === id);
      if (cardIndex === -1) return;

      const card = { ...state.cards[cardIndex], column: newColumn };

      state.cards.splice(cardIndex, 1);

      if (beforeId) {
        const insertAtIndex = state.cards.findIndex((card) => card.id === beforeId);
        if (insertAtIndex !== -1) {
          state.cards.splice(insertAtIndex, 0, card);
        } else {
          state.cards.push(card);
        }
      } else {
        state.cards.push(card);
      }
    },
  },
});

const saveState = (state: KanbanState) => {
  try {
    localStorage.setItem("kanbanState", JSON.stringify(state));
  } catch (error) {
    console.error("Ошибка сохранения состояния:", error);
  }
};

export const { addColumn, addCard, moveCard } = kanbanSlice.actions;
export default kanbanSlice.reducer;
