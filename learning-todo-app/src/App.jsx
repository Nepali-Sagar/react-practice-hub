import "./App.css";
import Header from "./components/presentational/Header";
import Taskmenu from "./components/presentational/Taskmenu";
import AddTaskForm from "./components/presentational/AddTaskForm";
import TaskList from "./components/presentational/TaskList";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <Taskmenu />
        <div className="todo-list">
          
          <AddTaskForm />
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default App;
