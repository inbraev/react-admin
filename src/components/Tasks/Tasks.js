import React from "react";
import Header from "../common/BigCards.js/Header";
import Task from "./Task";
import { Wrapper } from "../common/BigCards.js/Items";
import Input from "./Input";
function Tasks({ data }) {
  return (
    <Wrapper>
      <Header leftText="Tasks" rightText="View all" greyText="Today" />
      <Input />
      {data.map((task, index) => {
        return <Task key={index} status={task.status} text={task.text} />;
      })}
    </Wrapper>
  );
}

export default Tasks;
