import React from "react";
import TableHeader from "./TableHeader";
import styled from "styled-components";
import TableItem from "./TableItem/TableItem";
import { Div } from "./TableItem/TableItem";
import TableFooter from "./TableFooter";
const Wrapper = styled.main`
  border: 1px solid #dfe0eb;
  padding: 32px 32px 24px 32px;
  border-radius: 8px;
  width: 900px;
  position: relative;
  background: #fff;
`;

const TicketTable = styled.table`
  width: 100%;
  border-collapse: collapse;
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
export const Tr = styled.tr`
  :hover {
    background: #f7f8ff;
  }
`;
function Table({ tickets, sortTickets, setFilterTerm }) {
  return (
    <Wrapper>
      <TableHeader sortTickets={sortTickets} setFilterTerm={setFilterTerm} />
      <TicketTable>
        <thead>
          <Tr>
            <Th>Ticket details</Th>
            <Th>&nbsp;</Th>
            <Th>Customer name</Th>
            <Th>Date</Th>
            <Th>Priority</Th>
            <Th>&nbsp;</Th>
          </Tr>
        </thead>
        <Div />
        <tbody>
          {tickets.map((ticket, index) => {
            return <TableItem key={index} {...ticket} />;
          })}
        </tbody>
      </TicketTable>
      <TableFooter />
    </Wrapper>
  );
}

export default Table;
