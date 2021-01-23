import React from "react";
import Header from "../../common/BigCards.js/Header";
import Ticket from "./Ticket";
import { Wrapper } from "../../common/BigCards.js/Items";
function UnresolvedTickets({ data }) {
  return (
    <Wrapper>
      <Header
        leftText="Unresolved tickets"
        rightText="View details"
        greyText="Group:"
        text="Support"
      />

      {data.map((ticket, index) => {
        return (
          <Ticket key={index} status={ticket.status} number={ticket.number} />
        );
      })}
    </Wrapper>
  );
}

export default UnresolvedTickets;
