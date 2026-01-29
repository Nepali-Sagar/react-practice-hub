import "../style/ToggleButton.css";
import { useState } from "react";

function ToggleButton() {
  let [switchBtn, setSwitch] = useState(false);

  function toggleValue() {
    setSwitch((pre) => !pre);
  }

  return (
    <div className="toggleBtn">
      <button onClick={toggleValue}>{switchBtn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default ToggleButton;
