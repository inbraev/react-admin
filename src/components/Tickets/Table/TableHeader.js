import React from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import Filter from "../../../icons/Tickets/filter.svg";
import Select from "./Select";
const Flex = styled.header`
  display: flex;
`;

const Header = styled.h2`
  flex: 1 0 40rem;
  font-size: 19px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.4;
  color: #252733;
`;
function TableHeader({ sortTickets, setFilterTerm }) {
  return (
    <Flex>
      <Header>All tickets</Header>
      <Select sortTickets={sortTickets}></Select>
      <FilterButton
        text="Filter"
        icon={Filter}
        setFilterTerm={setFilterTerm}
      ></FilterButton>
    </Flex>
  );
}

export default TableHeader;
