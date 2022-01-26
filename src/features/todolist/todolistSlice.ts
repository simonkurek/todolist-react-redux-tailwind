import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import ITask from "./ITask";

export interface TodolistState {
  instances: number;
  inputValue: string;
  tasks: ITask[];
}

const initialState: TodolistState = {
  instances: 0,
  inputValue: "",
  tasks: [],
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      if (action.payload.length > 0) {
        const task: ITask = {
          id: state.instances++,
          text: action.payload,
        };
        state.tasks.push(task);
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    changeInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { addTask, removeTask, changeInputValue } = todolistSlice.actions;

export const selectTasks = (state: RootState) => state.todolist.tasks;

export const selectInputValue = (state: RootState) => state.todolist.inputValue;

export default todolistSlice.reducer;
