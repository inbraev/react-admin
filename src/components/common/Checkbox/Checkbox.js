import React from "react";
import "./Checkbox.css";
function Checkbox({ id }) {
  return (
    <div className="container">
      <div className="round">
        <input type="checkbox" id={id} />
        <label htmlFor={id}></label>
      </div>
    </div>
  );
}

export default Checkbox;
