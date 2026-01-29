import { useState } from "react";

function AddItems() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function itemAdd() {

    setItems([...items, text]);
  }

  function deleteList(index) {
    setItems(items.filter((_,i) => i !== index)
    )
    
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={itemAdd}>Send</button>

      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => deleteList(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddItems;
