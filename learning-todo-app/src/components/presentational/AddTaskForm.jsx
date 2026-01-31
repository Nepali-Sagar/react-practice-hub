import { useState } from "react";
import "../styles/addTaskForm.css";
import "../styles/taskList.css";
import "../styles/taskItem.css";
import TaskContainer from "../containers/TaskContainer";

function AddTaskForm() {
  const [taskArray, setTaskArray] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  function taskPush() {
    if(taskValue !== ''){
    setTaskArray([...taskArray, taskValue]);}
    setTaskValue("");
  }

  function taskDelete(index) {
    setTaskArray((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="addTask">
        <div className="taskInput">
          <input
            type="text"
            placeholder="Enter task..."
            value={taskValue}
            onChange={(val) => {
              setTaskValue(val.target.value);
            }}
          />
        </div>

        <div className="taskSubmit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={taskPush}
          >
            <path d="m15.5 5.69l2.81 2.81l-6.37 6.39h4.95v3.42H5.69V7.11h3.43v4.95l6.38-6.37Z" />
          </svg>
        </div>
      </div>

      <div className="listOfTask">
        <div className="scroll-tasklist">
          <TaskContainer tasks = {taskArray} onDelete={taskDelete}/>
        </div>
      </div>
    </>
  );
}

export default AddTaskForm;
