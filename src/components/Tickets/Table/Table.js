import React from "react";
import TableHeader from "./TableHeader";
import styled from "styled-components";
import TableItem from "./TableItem/TableItem";
import { Div } from "./TableItem/TableItem";
const Wrapper = styled.main`
  border: 1px solid #dfe0eb;
  padding: 32px 32px 24px 32px;
  border-radius: 8px;
  width: 900px;
  position: relative;
`;

const TicketTable = styled.table`
  width: 100%;

  margin-top: 40px;
`;
const Th = styled.th`
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.2;
  color: #9fa2b4;
  padding-bottom: 15px;
`;

function Table({ tickets, sortTickets, setFilterTerm }) {
  return (
    <Wrapper>
      <TableHeader sortTickets={sortTickets} setFilterTerm={setFilterTerm} />
      <TicketTable>
        <thead>
          <tr>
            <Th>Ticket details</Th>
            <Th>&nbsp;</Th>
            <Th>Customer name</Th>
            <Th>Date</Th>
            <Th>Priority</Th>
            <Th>&nbsp;</Th>
          </tr>
        </thead>
        <Div />
        <tbody>
          {tickets.map((ticket, index) => {
            return <TableItem key={index} {...ticket} />;
          })}
        </tbody>
      </TicketTable>
    </Wrapper>
  );
}

export default Table;
