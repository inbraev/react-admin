import React from "react";
import styled from "styled-components";
import Icon from "../../icons/createTask.svg";
const CreateButton = styled.button`
  background-color: #f7f8fc;
  padding: 8px;
  margin-left: 1px;
  ::before {
    content: url(${Icon});
  }
  :hover {
    cursor: pointer;
  }
`;
// add animation on click to do
function CreateTaskButton() {
  return <CreateButton />;
}

export default CreateTaskButton;
