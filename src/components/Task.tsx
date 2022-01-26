import React from "react";
import { useAppDispatch } from "../app/hooks";
import { removeTask } from "../slicers/todolistSlice";

type Props = {
  id: number;
  text: string;
};

const Task = ({ id, text }: Props) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(removeTask(id));
  };

  return (
    <div className="bg-slate-700 rounded-xl mb-5 flex p-2 content-center align-middle justify-center">
      <p className="pl-2">{text}</p>
      <i
        className="fas fa-trash text-3xl mt-1 ml-4 mr-2 hover:text-red-600 transition-colors"
        onClick={handleDelete}
      ></i>
    </div>
  );
};

export default Task;