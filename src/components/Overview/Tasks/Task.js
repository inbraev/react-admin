import React from "react";
import {
  JustifyDiv,
  LeftText,
  RightText,
} from "../../common/BigCards.js/Items";
import TaskStatus from "../../common/TaskStatus";
import Checkbox from "../../common/Checkbox/Checkbox";

function Task({ task, onToggleDone }) {
  const { id, done, status, text } = task;
  const getStyle = () => {
    return {
      cursor: "pointer",
      textDecoration: done ? "line-through" : "none",
    };
  };
  return (
    <JustifyDiv>
      <LeftText>
        <Checkbox id={id} done={done} onToggleDone={onToggleDone} />
      </LeftText>
      <LeftText style={{ flexGrow: 1, marginLeft: "20px" }}>
        <label htmlFor={id} style={getStyle()}>
          {text}
        </label>
      </LeftText>
      <RightText>
        <TaskStatus status={status} />
      </RightText>
    </JustifyDiv>
  );
}
export default Task;
