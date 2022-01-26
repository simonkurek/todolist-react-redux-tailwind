import "./App.css";
import AddTodo from "./features/addTodo/AddTodo";
import Header from "./features/header/Header";
import Taskslist from "./features/todolist/Taskslist";
// import AddTask from "./Components/AddTask";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <Taskslist />
    </div>
  );
  // </TaskList>
};

export default App;
