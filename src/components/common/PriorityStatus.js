import React from "react";
import styled from "styled-components";
import { Status as TaskStatus } from "./TaskStatus";

const Status = styled(TaskStatus)`
  border-radius: 100px;
`;

const PriorityStatus = ({ text }) => {
  return <Status status={text}>{text}</Status>;
};
export default PriorityStatus;
