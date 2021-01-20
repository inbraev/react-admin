import React from "react";
import styled from "styled-components";

const CheckBoxButton = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  width: 20px;
  height: 20px;
  border: 2px solid #c5c7cd;
  border-radius: 50%;
  &:checked {
    background: #3751ff;
  }
  &:unchecked {
    background: red;
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  border-radius: 50%;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  border:1px solid red;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? "red" : "black")}
  border-radius: 50%;
  transition: all 150ms;

  // ${HiddenCheckbox}:focus + & {
  //   box-shadow: 0 0 0 3px white;
  // }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")}
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;

//https://codesandbox.io/s/yvp79r4251?file=/src/index.js:285-558
//https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
