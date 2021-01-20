import React from "react";
import styled from "styled-components";
import { LeftText, RightText, JustifyDiv } from "./Ticket";
const HeaderJustifyDiv = styled(JustifyDiv)`
  padding: 0;
  border: none;
`;
const HeaderLeftText = styled(LeftText)`
  font-weight: 700;
  font-size: 1.9rem;
  line-height: 2.3rem;
  letter-spacing: 0.4px;
`;
const HeaderRightText = styled(RightText)`
  color: #3751ff;
  font-size: 1.4rem;
`;
const P = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.1px;
  margin-top: 8px;
  margin-bottom: 16px;
`;
const Span = styled.span`
  color: #9fa2b4;
`;
function Header() {
  return (
    <>
      <HeaderJustifyDiv>
        <HeaderLeftText>Unresolved tickets</HeaderLeftText>
        <HeaderRightText as="button">View details</HeaderRightText>
      </HeaderJustifyDiv>
      <P>
        <Span>Group:</Span> Support
      </P>
    </>
  );
}

export default Header;
