import styled, { createGlobalStyle } from "styled-components";
import React, { Component } from "react";
import Header from "./components/common/Header";
import CardsStatistics from "./components/Overview/CardStatistics/CardStatistics";
import img from "./images/avatar.png";
import Trends from "./components/Overview/Trends/Trends";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TicketsAndTasks from "./components/Overview/TicketsAndTasks/TicketsAndTasks";
import Navbar from "./components/common/Navbar/Navbar";
import Table from "./components/Tickets/Table/Table";
const GlobalStyle = createGlobalStyle`* {padding: 0;margin: 0;border: 0;}*,*:before,*:after {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}:focus,:active {outline: none;}a:focus,a:active {outline: none;}nav,footer,header,aside {display: block;}html{font-size:62.5%;}body {margin: 0;padding: 0;box-sizing:border-box;background: #F7F8FC;font-family: 'Mulish', Sans-Serif;color: #252733;}`;
const Wrapper = styled.div`
  margin: 30px 23px;
  max-width: 1440px;
`;
const Flex = styled.div`
  display: flex;
`;
const data = [
  { title: "Unresolved", info: 60 },
  { title: "Overdue", info: 16 },
  { title: "Open", info: 43 },
  { title: "On hold", info: 64 },
];
const trendData = [
  { title: "Resolved", info: 449 },
  { title: "Received", info: 426 },
  { title: "Average first response time", info: "33m" },
  { title: "Average response time", info: "3h 8m" },
  { title: "Resolution within SLA", info: "94%" },
];
const ticketsData = [
  { status: "Waiting on Feature Request", number: 4238 },
  { status: "Awaiting Customer Response", number: 1005 },
  { status: "Awaiting Developer Fix", number: 914 },
  { status: "Pending", number: 281 },
];
export class App extends Component {
  state = {
    tasksData: [
      { status: "urgent", text: "Finish ticket update" },
      { status: "new", text: "Create new ticket example" },
      { status: "default", text: "Update ticket report" },
    ],
    tickets: [
      {
        status: "high",
        text: "Contact Email not linked",
        blurText: "Updated 1 day ago",
        color: "red",
        name: "Tom Cruise",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:30 PM",
      },
      {
        status: "high",
        text: "Contact Email not linked",
        blurText: "Updated 1 day ago",
        color: "",
        name: "Tom Cruise",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:30 PM",
      },
      {
        status: "normal",
        text: "Contact Email not linked",
        blurText: "Updated 1 day ago",
        color: "cyan",
        name: "Tom Cruise",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:30 PM",
      },
      {
        status: "low",
        text: "Contact Email not linked",
        blurText: "Updated 1 day ago",
        color: "green",
        name: "Tom Cruise",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:30 PM",
      },
      {
        status: "high",
        text: "Contact Email not linked",
        blurText: "Updated 1 day ago",
        color: "pink",
        name: "Tom Cruise",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:30 PM",
      },
      {
        status: "low",
        text: "Contact Email not linked",
        blurText: "Updated 1 day ago",
        color: "blue",
        name: "Tom Cruise",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:30 PM",
      },
      {
        status: "normal",
        text: "Contact Email not linked",
        blurText: "Updated 1 day ago",
        color: "yellow",
        name: "Tom Cruise",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:30 PM",
      },
    ],
  };
  addTask = (task) => {
    const newTask = { status: "new", text: task };
    this.setState(({ tasksData }) => {
      const newArr = [newTask, ...tasksData];
      return { tasksData: newArr };
    });
  };
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route
              path="/"
              exactrender={() => (
                <>
                  <Flex>
                    <Navbar />
                    <Wrapper>
                      <Header title="Overview" src={img} />
                      <CardsStatistics data={data} />
                      <Trends trendData={trendData} />
                      <TicketsAndTasks
                        tasksData={this.state.tasksData}
                        ticketsData={ticketsData}
                        addTask={this.addTask}
                      />
                    </Wrapper>
                  </Flex>
                </>
              )}
            />
            <Route
              path="/tickets"
              render={() => (
                <>
                  <Header title="Tickets" src={img} />
                  <Table tickets={this.state.tickets} />
                </>
              )}
            />
          </Switch>
        </Router>
      </Wrapper>
    );
  }
}
export default App; /*<Wrapper><Header title="Overview" src={img} /><CardsStatistics data={data} /><Trends trendData={trendData} />



<TicketsAndTasks tasksData={tasksData} ticketsData={ticketsData} />*/
