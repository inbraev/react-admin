import React from "react";
import { JustifyDiv, LeftText, RightText } from "../common/BigCards.js/Items";
function Ticket({ status, number }) {
  return (
    <JustifyDiv>
      <LeftText>{status}</LeftText>
      <RightText>{number}</RightText>
    </JustifyDiv>
  );
}

export default Ticket;
