import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: #f7f8fc;
  padding: 3px;
  width: 68px;
  color: #4b506d;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  margin-left: 32px;
  letter-spacing: 0.2;
  :hover {
    cursor: pointer;
  }
  ::before {
    content: url(${(props) => props.icon});
  }
`;
function TicketButton({ text, icon }) {
  return <Button icon={icon}>{text}</Button>;
}

export default TicketButton;
