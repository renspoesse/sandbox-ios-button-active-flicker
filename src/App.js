import React from "react";
import "./styles.css";

const Toggle = ({checked, onChange}) => (
  <label 
    className={checked ? "Toggle Toggle-checked" : "Toggle"}
    // TODO: iOS requires this for the sandbox but in our
    // code it seems to work without it. Perhaps because
    // of the `onclick` on #root?
    onTouchStart={() => console.log("touchstart")}
  >
    <input 
      type="radio" 
      checked={checked} 
      onChange={onChange} 
      style={{position: "absolute", visibility: "hidden"}}
    />
  </label>
);

export default function App() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="App">
      <Toggle checked={checked} onChange={e => setChecked(e.target.checked)} />
      <Toggle checked={!checked} onChange={e => setChecked(!e.target.checked)} />
    </div>
  );
}
