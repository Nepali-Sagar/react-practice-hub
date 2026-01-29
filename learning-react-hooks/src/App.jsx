import ClickCounter from "./components/ClickCounter";
import ToggleButton from "./components/ToggleButton";
import TextMirror from "./components/TextMirror";
import CharacterCounter from "./components/CharacterCounter";
import TextVisibility from "./components/TextVisibility";
import LoginToggle from "./components/LoginToggle"
import AddItems from "./components/AddItems";
import "./index.css";

function App() {
  return (
    <div className="mini-grid">
      <ClickCounter />
      <ToggleButton />
      <TextMirror />
      <CharacterCounter/>
      <TextVisibility/>
      <LoginToggle/>
      <AddItems/>
    </div>
  );
}

export default App;
