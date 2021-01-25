import React from "react";
import "./Checkbox.css";
function Checkbox({ id, done, onToggleDone }) {
  const on = (id) => {
    console.log(id);
    // onToggleDone(id);
  };
  return (
    <div className="container">
      <div className="round">
        {/* add onChange handler */}
        <input
          type="checkbox"
          id={id}
          checked={done ? "checked" : ""}
          onChange={on}
        />
        <label htmlFor={id}></label>
      </div>
    </div>
  );
}

export default Checkbox;
