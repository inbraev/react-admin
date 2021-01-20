import React from "react";
import styled from "styled-components";
import Icons from "./Icons";
import Profile from "./Profile";
const HeaderRow = styled.header`
  display: flex;
  flex-wrap: wrap;
`;
const HeaderTitle = styled.h2`
  flex: 1 1 3.5rem;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3rem;
  letter-spacing: 0.3px;
`;

function Header({ title, src }) {
  console.log(src);
  return (
    <HeaderRow>
      <HeaderTitle>{title}</HeaderTitle>
      <Icons></Icons>
      <Profile username="Nazar" src={src}></Profile>
    </HeaderRow>
  );
}
export default Header;
