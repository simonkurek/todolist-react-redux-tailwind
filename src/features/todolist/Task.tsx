import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { removeTask } from "./todolistSlice";

type Props = {
  id: number;
  text: string;
};

const Task = (props: Props) => {
  const dispatch = useAppDispatch();
  const deleteTask = () => {
    dispatch(removeTask(props.id));
  };

  return (
    <div className="bg-slate-700 rounded-xl mb-5 flex p-2 content-center align-middle justify-center">
      <p className="pl-2">{props.text}</p>
      <i
        className="fas fa-trash text-3xl mt-1 ml-4 mr-2 hover:text-red-600 transition-colors"
        onClick={deleteTask}
      ></i>
    </div>
  );
};

export default Task;
