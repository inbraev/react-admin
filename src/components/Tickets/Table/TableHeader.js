import React from "react";
import styled from "styled-components";
import TicketButton from "./TicketButton";
import Sort from "../../../icons/Tickets/sort.svg";
import Filter from "../../../icons/Tickets/filter.svg";

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
function TableHeader() {
  return (
    <Flex>
      <Header>All tickets</Header>
      <TicketButton text="Sort" icon={Sort}></TicketButton>
      <TicketButton text="Filter" icon={Filter}></TicketButton>
    </Flex>
  );
}

export default TableHeader;
