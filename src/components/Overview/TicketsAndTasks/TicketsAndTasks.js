import React from "react";
import UnresolvedTickets from "../UnresolvedTickets/UnresolvedTickets";
import Tasks from "../Tasks/Tasks";
import styled from "styled-components";
const TicketTaskSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 905px) {
    align-items: center;
    justify-content: center;
  }
`;
function TicketsAndTasks({ tasksData, addTask, ticketsData, onToggleDone }) {
  return (
    <TicketTaskSection>
      <UnresolvedTickets data={ticketsData} />
      <Tasks data={tasksData} addTask={addTask} onToggleDone={onToggleDone} />
    </TicketTaskSection>
  );
}

export default TicketsAndTasks;
