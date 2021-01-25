import React, { Component } from "react";
import styled from "styled-components";
import {
  JustifyDiv,
  LeftText,
  RightText,
} from "../../common/BigCards.js/Items";
import CreateTaskButton from "../../common/CreateTaskButton";
import { Divider } from "../../common/Navbar/SidebarData";
import { Div } from "../../Tickets/Table/TableItem/TableItem";
const Input = styled.input`
  font-size: 14px;
  /* padding: 10px; */
  background-color: #f7f8fc;
  width: 100%;
  box-shadow: none;
  ::placeholder {
    color: #c5c7cd;
  }
  :focus {
    border-bottom: 1px solid #3751ff;
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
              required
            />
          </LeftText>

          <RightText>
            <CreateTaskButton type="submit" />
          </RightText>
        </JustifyDiv>
      </form>
    );
  }
}

export default CreateTask;
