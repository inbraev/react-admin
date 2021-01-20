// import "./App.css";
// // import TaskStatus from "./components/common/TaskStatus";
// // import PriorityStatus from "./components/common/PriorityStatus";
// // import RadioButton from "./components/common/CheckBox";
// class App extends React.Component {
//   state = { checked: false }

//   handleCheckboxChange = event => {
//     this.setState({ checked: event.target.checked })
//   }

//   render() {
//   return (
//     <div className="App">
//       {/* <TaskStatus text="default" />
//       <TaskStatus text="urgent" color="red" />
//       <TaskStatus text="new" color="green" />
//       <PriorityStatus text="normal" color="red" />
//       <PriorityStatus text="high" color="yellow" />
//       <PriorityStatus text="low" color="yellow" /> */}
//       <label htmlFor="1">
//         <RadioButton
//           checked={true}
//           onChange={() => console.log()}
//         ></RadioButton>
//       </label>
//     </div>
//   );
// }}
import styled from "styled-components";
// import Profile from "./components/common/Profile";
// import Icons from "./components/common/Icons";
// import Avatar from "./components/common/Avatar";
import Header from "./components/common/Header";
import Card from "./components/common/Cards";
import { CardsStatistics } from "./components/common/Cards";
import img from "./images/avatar.png";
import { createGlobalStyle } from "styled-components";
import Trends from "./components/Trends/Trends";
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
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    background: #F7F8FC;
    
     
    font-family: 'Mulish', Sans-Serif;
    color: #252733;
  }
`;
// const Label = styled.label`
//   background: red;
//   display: inline-block;
//   padding: 1rem;
// `;
const Wrapper = styled.div`
  margin: 30px 23px;
`;
// const Input = styled.input`
//   border-radius: 50%;
//   display: block;
//   &:checked + ${Label} {
//     background: green;
//   }
// `;

const App = () => (
  <div>
    <GlobalStyle />
    <Wrapper>
      <Header title="Overview" src={img}></Header>
      <CardsStatistics>
        <Card title="Unresolved" info="60"></Card>
        <Card title="Opened" info="60"></Card>
        <Card title="On hold" info="60"></Card>
        <Card title="Overdue" info="60"></Card>
      </CardsStatistics>
      <Trends></Trends>
    </Wrapper>
  </div>
);
export default App;
