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
  ${({ color }) => {
    switch (color) {
      case "yellow":
        return "background:#FEC400";
      case "green":
        return "background:#29CC97";
      case "red":
        return "background:#F12B2C";
      default:
        return `background:#F0F1F7;
        color:#9FA2B4`;
    }
  }};
`;

const TaskStatus = ({ color, text }) => {
  return <Status color={color}>{text}</Status>;
};
export default TaskStatus;
