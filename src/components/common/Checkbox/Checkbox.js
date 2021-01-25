import React from "react";
import "./Checkbox.css";
function Checkbox(props) {
  const onToggleDone = () => {
    props.onToggleDone(props.id);
  };
  return (
    <div className="container">
      <div className="round">
        <input
          type="checkbox"
          id={props.id}
          checked={props.done ? "checked" : ""}
          onChange={onToggleDone}
        />
        <label htmlFor={props.id}></label>
      </div>
    </div>
  );
}

export default Checkbox;
