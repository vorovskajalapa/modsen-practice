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

const loadState = (): KanbanState => {
  try {
    const savedState = localStorage.getItem("kanbanState");
    return savedState ? JSON.parse(savedState) : initialState;
  } catch (error) {
    console.error("Ошибка загрузки состояния:", error);
    return initialState;
  }
};

const initialState: KanbanState = {
  cards: [{ title: "REDUX SHIT", id: "1", column: "done" }],
  columns: [
    { title: "Backlog", column: "backlog", bgColor: "#4F46E5" },
    { title: "To Do", column: "todo", bgColor: "#F59E0B" },
    { title: "In Progress", column: "doing", bgColor: "#22C55E" },
    { title: "Done", column: "done", bgColor: "#10B981" },
  ],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState: loadState(),
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
  },
});

const saveState = (state: KanbanState) => {
  try {
    localStorage.setItem("kanbanState", JSON.stringify(state));
  } catch (error) {
    console.error("Ошибка сохранения состояния:", error);
  }
};

export const { addColumn, addCard } = kanbanSlice.actions;
export default kanbanSlice.reducer;
