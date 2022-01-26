//import React from "react";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  selectInputValue,
  addTask,
  changeInputValue,
} from "../todolist/todolistSlice";

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
      {/* <h2 className="mb-10 text-3xl font-bold">Add Todo</h2> */}
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
