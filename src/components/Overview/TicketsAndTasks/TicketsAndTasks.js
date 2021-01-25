import React from "react";
import UnresolvedTickets from "../UnresolvedTickets/UnresolvedTickets";
import Tasks from "../Tasks/Tasks";
import styled from "styled-components";
const TicketTaskSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
function TicketsAndTasks({ tasksData, addTask, ticketsData ,onToggleDone}) {
  return (
    <TicketTaskSection>
      <UnresolvedTickets data={ticketsData} style={{ flexBasis: "70rem" }} />
      <Tasks
        data={tasksData}
        addTask={addTask}
        onToggleDone={onToggleDone}
        style={{ flexBasis: "70rem" }}
      />
    </TicketTaskSection>
  );
}

export default TicketsAndTasks;
