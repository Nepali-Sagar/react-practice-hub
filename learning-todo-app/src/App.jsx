import "./App.css";
import Header from "./components/presentational/Header";
import SideNotes from "./components/presentational/SideNotes";
import Taskmenu from "./components/presentational/Taskmenu";
import AddTaskForm from "./components/presentational/AddTaskForm";
import TaskList from "./components/presentational/TaskList";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Taskmenu />
        <div className="todo-list">
          <TaskList />
          <AddTaskForm />
        </div>
        <SideNotes />
      </main>
    </>
  );
}

export default App;
