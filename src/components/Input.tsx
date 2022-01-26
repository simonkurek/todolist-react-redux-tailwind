import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  changeInputValue,
  selectInputValue,
} from "../features/todolist/todolistSlice";

type Props = {
  type: string;
  placeholder: string;
};

const Input = (props: Props) => {
  const text = useAppSelector(selectInputValue);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInputValue(e.target.value));
  };

  return (
    <input
      className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16 w-50"
      type={props.type}
      placeholder={props.placeholder}
      value={text}
      onChange={handleChange}
    />
  );
};

export default Input;
