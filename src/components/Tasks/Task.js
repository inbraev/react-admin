import React from "react";
import { JustifyDiv, LeftText, RightText } from "../common/BigCards.js/Items";
import TaskStatus from "../common/TaskStatus";
function Task({ status, text }) {
  return (
    <JustifyDiv>
      <LeftText>
        <input
          type="checkbox"
          style={{
            width: "20px",
            height: "20px",
            marginRight: "10px",
          }}
        />
      </LeftText>
      <LeftText style={{ flexGrow: 1 }}>{text}</LeftText>

      <RightText>
        <TaskStatus status={status} />
      </RightText>
    </JustifyDiv>
  );
}

export default Task;
