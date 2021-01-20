import styled from "styled-components";
import React from "react";
export const Status = styled.div`
  font-size: 1.1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  width: fit-content;
  color: white;
  text-align: center;
  font-weight: bold;
  line-height: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  ${({ status }) => {
    if (["urgent", "low"].includes(status)) {
      return "background:#FEC400";
    } else if (["normal", "new"].includes(status)) {
      return "background:#29CC97";
    } else if (status === "high") {
      return "background:#F12B2C";
    } else {
      return `background:#F0F1F7;
              color:#9FA2B4`;
    }
  }}
`;

const TaskStatus = ({ status }) => {
  return <Status status={status}>{status}</Status>;
};
export default TaskStatus;
