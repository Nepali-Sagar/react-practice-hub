import "./App.css";
import Header from "./components/presentational/Header";
import Taskmenu from "./components/presentational/Taskmenu";
import AddTaskForm from "./components/presentational/AddTaskForm";

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
        </div>
      </main>
    </>
  );
}

export default App;
