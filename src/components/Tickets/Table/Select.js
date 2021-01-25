import React, { useState } from "react";
import styled from "styled-components";
import DropdownIcon from "./SortIcon";
const DropdownMenu = styled.select`
  background: #f7f8fc;
  appearance: none;
  color: #4b506d;
  cursor: pointer;
`;
const values = ["Details", "Name", "Date", "Priority"];

function Select(props) {
  const [ascending, setAscending] = useState(true);
  const changeSortOrder = () => setAscending(!ascending);
  const onInput = (e) => { 
    props.sortTickets(e.target.value, ascending);
    changeSortOrder();
  };
  return (
    <>
      <DropdownIcon />
      <DropdownMenu name="Sorting" id="sort">
        <option hidden value="Sort">
          Sort
        </option>
        {values.map((item, index) => {
          return (
            <option value={item} key={index} onClick={onInput}>
              {item}
            </option>
          );
        })}
      </DropdownMenu>
    </>
  );
}

export default Select;
