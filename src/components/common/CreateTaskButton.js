import React from "react";
import styled from "styled-components";
import Icon from "../../icons/createTask.svg";
const CreateButton = styled.button`
  background-color: #f7f8fc;
  padding: 8px;
  width: 100%;
  ::before {
    content: url(${Icon});
  }
`;
// add animation on click to do
function CreateTaskButton() {
  return <CreateButton onClick={() => console.log("a")} />;
}

export default CreateTaskButton;
