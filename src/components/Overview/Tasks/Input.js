import React, { Component } from "react";
import styled from "styled-components";
import {
  JustifyDiv,
  LeftText,
  RightText,
} from "../../common/BigCards.js/Items";
import CreateTaskButton from "../../common/CreateTaskButton";
import { Divider } from "../../common/Navbar/SidebarData";
const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  background-color: #f7f8fc;

  width: 100%;
  ::placeholder {
    color: #c5c7cd;
  }
`;

export class CreateTask extends Component {
  state = {
    inputField: "",
  };
  onInputChange = (e) => {
    this.setState({
      inputField: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.inputField) {
      alert("Поле не может быть пустым!");
      return;
    }
    this.props.addTask(this.state.inputField);
    this.setState({
      inputField: "",
    });
  };
  render() {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <JustifyDiv style={{ padding: "0" }}>
          <LeftText style={{ flexGrow: 1 }}>
            <Input
              type="text"
              maxLength="50"
              value={this.state.inputField}
              placeholder="Create new task"
              onChange={this.onInputChange}
            />
          </LeftText>
          <RightText>
            <CreateTaskButton type="submit" />
          </RightText>
        </JustifyDiv>
        <Divider />
      </form>
    );
  }
}

export default CreateTask;
