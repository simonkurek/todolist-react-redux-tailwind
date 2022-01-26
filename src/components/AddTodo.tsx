import * as React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Button from "./Button";
import Input from "./Input";
import {
  selectInputValue,
  addTask,
  changeInputValue,
} from "../slicers/todolistSlice";

const AddTodo = () => {
  const inputValue = useAppSelector(selectInputValue);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask(inputValue));
    dispatch(changeInputValue(""));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex">
          <Input type={"text"} placeholder={"Enter task here..."} />
          <Button text={"Add Task!"} />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
