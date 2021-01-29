import React from "react";
import styled from "styled-components";
import Icons from "./Icons";
import Profile from "./Profile";

const HeaderRow = styled.header`
  display: flex;
  margin-bottom: 5.8rem;
`;
const HeaderTitle = styled.h2`
  flex: 1 1 2rem;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3rem;
  letter-spacing: 0.3px;
  margin-left: 4rem;
`;

function Header({ title, src }) {
  return (
    <HeaderRow>
      <HeaderTitle>{title}</HeaderTitle>
      <Icons></Icons>
      <Profile username="Nazar" src={src}></Profile>
    </HeaderRow>
  );
}
export default Header;
