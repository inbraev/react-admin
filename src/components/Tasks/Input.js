import React from "react";
import styled from "styled-components";
import { JustifyDiv, LeftText, RightText } from "../common/BigCards.js/Items";
import CreateTaskButton from "../common/CreateTaskButton";
const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  background-color: #f7f8fc;

  width: 100%;
  ::placeholder {
    color: #c5c7cd;
  }
`;

function TaskInput() {
  return (
    <JustifyDiv>
      <LeftText style={{ flexGrow: 1 }}>
        <Input type="text" placeholder="Create new task" />
      </LeftText>
      <RightText>
        <CreateTaskButton />
      </RightText>
    </JustifyDiv>
  );
}

export default TaskInput;
