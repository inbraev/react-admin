import React from "react";
import {
  JustifyDiv,
  LeftText,
  RightText,
} from "../../common/BigCards.js/Items";
import TaskStatus from "../../common/TaskStatus";
import Checkbox from "../../common/Checkbox/Checkbox";
function Task({ status, text, done ,onToggleDone}) {
  return (
    <JustifyDiv>
      <LeftText>
        <Checkbox id={text} done={done} />
      </LeftText>
      <LeftText style={{ flexGrow: 1, marginLeft: "20px" }}>{text}</LeftText>
      <RightText>
        <TaskStatus status={status} />
      </RightText>
    </JustifyDiv>
  );
}

export default Task;
