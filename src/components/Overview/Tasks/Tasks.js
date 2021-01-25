import React from "react";
import Header from "../../common/BigCards.js/Header";
import Task from "./Task";
import { Wrapper } from "../../common/BigCards.js/Items";
import CreateTask from "./Input";

function Tasks({ data, addTask, onToggleDone }) {
  return (
    <Wrapper>
      <Header leftText="Tasks" rightText="View all" greyText="Today" />
      <CreateTask addTask={addTask} />
      {data.map((task, index) => {
        return <Task key={index} task={task} onToggleDone={onToggleDone} />;
      })}
    </Wrapper>
  );
}

export default Tasks;
