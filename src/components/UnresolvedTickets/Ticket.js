import React from "react";
import styled from "styled-components";
export const JustifyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #dfe0eb;
  :last-child {
    border: none;
  }
`;
export const LeftText = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.2px;
  font-weight: 600;
  color: #252733;
`;
export const RightText = styled(LeftText)`
  color: #9fa2b4;
`;

function Ticket({ status, number }) {
  return (
    <JustifyDiv>
      <LeftText>{status}</LeftText>
      <RightText>{number}</RightText>
    </JustifyDiv>
  );
}

export default Ticket;
