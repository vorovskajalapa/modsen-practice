import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./slices/KanbanSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("kanbanState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Failed to load state", err);
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("kanbanState", JSON.stringify(state.kanban));
  } catch (err) {
    console.error("Failed to save state", err);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
