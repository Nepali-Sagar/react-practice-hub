import '../styles/taskMenu.css'

function Taskmenu(){
    return(
        <>
         <div className="todo-menu">
          <div className="all-Btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17L7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42l-6.35 6.35l1.42 1.41z" />
            </svg>
            <p>all</p>
          </div>

          <div className="completed-Btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12" />
                <path d="m17.608 9l-7.726 7.726L6 12.093l1.511-1.31l2.476 3.01l6.207-6.207z" />
              </g>
            </svg>
            <p>completed</p>
          </div>

          <div className="pending-Btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 13.5q.625 0 1.063-.438T8.5 12q0-.625-.438-1.063T7 10.5q-.625 0-1.063.438T5.5 12q0 .625.438 1.063T7 13.5Zm5 0q.625 0 1.063-.438T13.5 12q0-.625-.438-1.063T12 10.5q-.625 0-1.063.438T10.5 12q0 .625.438 1.063T12 13.5Zm5 0q.625 0 1.063-.438T18.5 12q0-.625-.438-1.063T17 10.5q-.625 0-1.063.438T15.5 12q0 .625.438 1.063T17 13.5ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" />
            </svg>
            <p>pending</p>
          </div>
        </div>
        </>
    )
}

export default Taskmenu;