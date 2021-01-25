import React, { useState } from "react";
import styled from "styled-components";

const Filter = styled.input`
  position: absolute;
  top: 35px;
  left: -30px;
  width: 150px;
  padding: 5px 10px;
  color: #4b506d;
  font-size: 14px;
  text-align: center;
  border: 1px solid #e5e5ef;
  font-weight: 400;
  box-shadow: 0 0 12px 0.2px #c5c7cd;
  border-radius: 80px;
  :focus {
    border: 1.3px solid #363740;
  }
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  ::placeholder {
    color: #c5c7cd;
  }
`;
function FilterInput({ visibility, handleToggle, setFilterTerm }) {
  const [inputField, setInputField] = useState("");

  const onInputChange = (e) => {
    setFilterTerm(inputField);
    setInputField(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFilterTerm(inputField);
    setInputField("");
    handleToggle();
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <Filter
        required
        tabIndex="0"
        placeholder="Search by details"
        visibility={visibility}
        value={inputField}
        onChange={onInputChange}
        autoFocus
      />
    </form>
  );
}

export default FilterInput;
