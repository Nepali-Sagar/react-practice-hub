import "../styles/taskMenu.css";
import Button from "../shared/Button";

function Taskmenu() {
  return (
    <>
      <div className="todo-menu">

        <div className="menu-toogle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#000000"
              stroke-width="2"
              d="M2 19h20M2 5h20M2 12h20"
            />
          </svg>
          <p className="menu-btn-text">MENU</p>
        </div>
        {/* -------------------------------------------- */}
          <div className="menu-button">
           <Button btnName='all'/>
          </div>
        </div>
  
    </>
  );
}

export default Taskmenu;
