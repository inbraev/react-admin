import React from "react";
import styled, { keyframes } from "styled-components";
import Icon from "../../icons/createTask.svg";

const scale = keyframes`
0%{
  transform:scale(0.8)
} 
   70% {
    transform:scale(1.3)
  }
`;
const CreateButton = styled.button`
  background-color: #f7f8fc;
  padding: 10px;
  margin-left: 1px;
  ::before {
    content: url(${Icon});
  }
  :hover {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.3;
  }
  :focus {
    animation: ${scale} 0.5s linear;
  }
`;

function CreateTaskButton({ disable }) {
  return <CreateButton disabled={disable} />;
}

export default CreateTaskButton;
