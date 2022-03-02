import { useAppDispatch } from "../app/hooks";
import ApiClient from "../client/api";
import { changeTaskStatus, removeTask } from "../slicers/todolistSlice";

type Props = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const Task = ({ id, text, isCompleted }: Props) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    const apiClient = new ApiClient({
      protocol: "http",
      host: "localhost",
      port: 13000,
    });

    apiClient.deleteTask(id);
    dispatch(removeTask(id));
  };

  const handleStatusChange = () => {
    const apiClient = new ApiClient({
      protocol: "http",
      host: "localhost",
      port: 13000,
    });

    apiClient.updateTaskIsCompleted(id);
    dispatch(changeTaskStatus(id));
  };

  return (
    <div className="bg-slate-700 rounded-xl mb-5 flex p-2 content-center align-middle justify-center">
      {isCompleted ? (
        <>
          <i
            className="fas fa-solid fa-check w-6 text-3xl mt-1 flex-none mr-2 ml-1 text-green-500 line"
            onClick={handleStatusChange}
          ></i>
          <p className="pl-2 grow line-through">{text}</p>
        </>
      ) : (
        <>
          <i
            className="fas fa-solid fa-circle w-6 text-3xl mt-1 flex-none mr-2 ml-1 text-gray-600"
            onClick={handleStatusChange}
          ></i>
          <p className="pl-2 grow">{text}</p>
        </>
      )}
      <i
        className="fas fa-trash text-3xl mt-1 ml-4 mr-1 flex-none hover:text-red-600 transition-colors"
        onClick={handleDelete}
      ></i>
    </div>
  );
};

export default Task;
