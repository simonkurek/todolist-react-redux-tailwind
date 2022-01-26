import { useAppSelector } from "../app/hooks";
import Task from "./Task";
import { selectTasks } from "../slicers/todolistSlice";

const TasksList = () => {
  const tasks = useAppSelector(selectTasks);

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
