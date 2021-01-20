import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Ticket from "./Ticket";
const Wrapper = styled.article`
  max-width: 64rem;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  padding: 32px 32px 0 32px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;
function UnresolvedTickets({ data }) {
  return (
    <Wrapper>
      <Header />
      {data.map((ticket, index) => {
        return (
          <Ticket key={index} status={ticket.status} number={ticket.number} />
        );
      })}
    </Wrapper>
  );
}

export default UnresolvedTickets;
