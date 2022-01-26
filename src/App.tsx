import "./App.css";
import AddTodo from "./components/AddTodo";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <div className="App">
      <h1 className="font-bold text-6xl mb-20">To-Do List</h1>
      <AddTodo />
      <TasksList />
    </div>
  );
};

export default App;
