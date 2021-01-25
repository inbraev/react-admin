import React, { useState } from "react";
import styled from "styled-components";
import FilterInput from "./FilterInput";
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
const FilterContainer = styled.div`
  position: relative;
`;

function FilterButton({ text, icon, setFilterTerm }) {
  const [toggleFilterInput, setToggleFilterInput] = useState(false);
  const handleToggle = () => {
    setToggleFilterInput(!toggleFilterInput);
  };
  return (
    <FilterContainer>
      <Button icon={icon} onClick={handleToggle}>
        {text}
      </Button>
      <FilterInput
        visibility={toggleFilterInput ? 1 : 0}
        handleToggle={handleToggle}
        setFilterTerm={setFilterTerm}
      />
    </FilterContainer>
  );
}

export default FilterButton;
