import React from "react";
import styled from "styled-components";
import { LeftText, RightText, JustifyDiv } from "./Items";
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
  font-size: 1.5rem;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
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
function Header({ leftText, rightText, greyText, text }) {
  return (
    <>
      <HeaderJustifyDiv>
        <HeaderLeftText>{leftText}</HeaderLeftText>
        <HeaderRightText as="a">{rightText}</HeaderRightText>
      </HeaderJustifyDiv>
      <P>
        <Span>{greyText}</Span>&nbsp;{text}
      </P>
    </>
  );
}

export default Header;
