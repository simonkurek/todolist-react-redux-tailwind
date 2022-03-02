import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import ITask from "../interfaces/ITask";

export interface TodolistState {
  inputValue: string;
  tasks: ITask[];
}

const initialState: TodolistState = {
  inputValue: "",
  tasks: [],
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<string>) => {
      if (action.payload.length > 0) {
        state.tasks.push({
          id: state.tasks.length,
          text: action.payload,
          isCompleted: false,
        });
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    changeInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    changeTaskStatus: (state, action: PayloadAction<number>) => {
      // change status if task is completed
      // find index of completed task
      state.tasks.map(
        (task) =>
          task.id === action.payload && (task.isCompleted = !task.isCompleted)
      );
    },
  },
});

export const {
  setTasks,
  addTask,
  removeTask,
  changeInputValue,
  changeTaskStatus,
} = todolistSlice.actions;

export const selectTasks = (state: RootState) => state.todolist.tasks;

export const selectInputValue = (state: RootState) => state.todolist.inputValue;

export default todolistSlice.reducer;
