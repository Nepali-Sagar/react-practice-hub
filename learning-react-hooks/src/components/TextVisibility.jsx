import "../style/TextMirror.css";
import { useState } from "react";

function TextVisibility() {
  const [content, setContent] = useState(false);

  function changeVisibility(){
    setContent(par => !par)
  }
  return (

    <div className="inputText">
      <button onClick={changeVisibility}>{content? 'HIDE': 'SHOW'}</button>
      <p>{content? 'Hi': ''}</p>
    </div>
  );
}

export default TextVisibility;
