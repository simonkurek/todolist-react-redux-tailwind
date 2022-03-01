import { useAppDispatch, useAppSelector } from "../app/hooks";
import Task from "./Task";
import { selectTasks, setTasks } from "../slicers/todolistSlice";
import { useEffect } from "react";
import ApiClient from "../client/api";

const TasksList = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const apiClient = new ApiClient({
      protocol: "http",
      host: "localhost",
      port: 13000,
    });

    apiClient.getAll().then((tasks) => {
      console.log(tasks);
      dispatch(setTasks(tasks));
    });
  }, [dispatch]);

  return (
    <div>
      <h2 className="mt-14 font-bold mb-3">Tasks list</h2>
      {tasks.map((task) => (
        <Task id={task.id} text={task.text} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
