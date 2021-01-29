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
const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html{
  font-size:62.5%;
}
  body {
    box-sizing:border-box;
    background: #F7F8FC;
    font-family: 'Mulish', Sans-Serif;
    color: #252733;
  }
`;
const FlexContainer = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  margin: 30px 23px;
  max-width: 1440px;
`;

const data = [
  { title: "Unresoled", info: 60 },
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
      { id: 1, status: "urgent", text: "Finish ticket update", done: false },
      { id: 2, status: "new", text: "Create new ticket example", done: false },
      { id: 3, status: "default", text: "Update ticket report", done: true },
    ],
    maxId: 4,
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
        text: "Adding Images to Feature Posts",
        blurText: "Updated 1 day ago",
        color: "",
        name: "Matt Damon",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "7:30 PM",
      },
      {
        status: "normal",
        text: "When will be I charged this month?",
        blurText: "Updated 1 day ago",
        color: "cyan",
        name: "Robert Downey",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:35 PM",
      },
      {
        status: "low",
        text: "Payment not going through",
        blurText: "Updated 1 day ago",
        color: "green",
        name: "Christian Bale",
        blurName: "on 24.05.2019",
        date: "May 25,2019",
        blurDate: "6:30 PM",
      },
      {
        status: "high",
        text: "Unable to add replies",
        blurText: "Updated 1 day ago",
        color: "pink",
        name: "Henry Cavil",
        blurName: "on 24.05.2019",
        date: "May 26,2019",
        blurDate: "6:50 PM",
      },
      {
        status: "low",
        text: "Downtime since last week",
        blurText: "Updated 2 days ago",
        color: "blue",
        name: "Chris Evans",
        blurName: "on 23.05.2019",
        date: "May 25,2019",
        blurDate: "11:30 PM",
      },
      {
        status: "normal",
        text: "How do I change my password?",
        blurText: "Updated 6 days ago",
        color: "yellow",
        name: "Steve Rogers",
        blurName: "on 24.05.2019",
        date: "May 24,2019",
        blurDate: "8:30 PM",
      },
    ],
    filterTerm: "",
  };
  sortTickets = (property, ascending) => {
    const newArray = [...this.state.tickets];
    const types = {
      status: "Priority",
      date: "Date",
      text: "Details",
      name: "Name",
    };
    const sortProperty = Object.keys(types).find(
      (key) => types[key] === property
    );
    ascending
      ? newArray.sort((a, b) => a[sortProperty] > b[sortProperty])
      : newArray.sort((a, b) => a[sortProperty] < b[sortProperty]);

    this.setState(({ tickets }) => {
      return {
        tickets: newArray,
      };
    });
  };

  setFilterTerm = (filterTerm) => {
    this.setState({ filterTerm });
  };

  filterTickets = (data, substr) => {
    if (!substr.trim()) {
      return data;
    }
    return data.filter((elem) =>
      elem.text.toLowerCase().includes(substr.toLowerCase())
    );
  };
  onToggleDone = (id) => {
    this.setState(({ tasksData }) => {
      const index = tasksData.findIndex((elem) => elem.id === id);
      const oldItem = tasksData[index];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...tasksData.slice(0, index),
        newItem,
        ...tasksData.slice(index + 1),
      ];
      return {
        tasksData: newArray,
      };
    });
  };
  addTask = (task) => {
    const newTask = {
      status: "new",
      text: task,
      done: false,
      id: this.state.maxId,
    };
    this.setState(({ tasksData, maxId }) => {
      const newArr = [newTask, ...tasksData];
      return {
        tasksData: newArr,
        maxId: maxId + 1,
      };
    });
  };
  render() {
    const { tickets, filterTerm, tasksData } = this.state;
    const visibleTickets = this.filterTickets(tickets, filterTerm);
    return (
      <Wrapper>
        <GlobalStyle />
        <FlexContainer>
          <Router>
            <Navbar />
            <Wrapper>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <>
                      <Header title="Overview" src={img} />
                      <main>
                        <CardsStatistics data={data} />
                        <Trends trendData={trendData} />
                        <TicketsAndTasks
                          tasksData={tasksData}
                          ticketsData={ticketsData}
                          addTask={this.addTask}
                          onToggleDone={this.onToggleDone}
                        />
                      </main>
                    </>
                  )}
                />
                <Route
                  path="/tickets"
                  render={() => (
                    <>
                      <Header title="Tickets" src={img} />
                      <Table
                        tickets={visibleTickets}
                        sortTickets={this.sortTickets}
                        setFilterTerm={this.setFilterTerm}
                      />
                    </>
                  )}
                />
                <Route component={Navbar} />
              </Switch>
            </Wrapper>
          </Router>
        </FlexContainer>
      </Wrapper>
    );
  }
}

export default App;
