import '../styles/addTaskForm.css'

function AddTaskForm(){
    return(
        <>
                  <div className="addTask">
            <div className="taskInput">
              <input type="text" placeholder="Enter task..."/>
            </div>

            <div className="taskSubmit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m15.5 5.69l2.81 2.81l-6.37 6.39h4.95v3.42H5.69V7.11h3.43v4.95l6.38-6.37Z" />
              </svg>
            </div>
          </div>
        
        </>
    )
}

export default AddTaskForm