import React from "react";
import styled from "styled-components";
import PriorityStatus from "../../../common/PriorityStatus";
import MoreVertical from "./Icon";
import { Tr } from "../Table";
const P = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2;
  color: #252733;
  font-weight: 600;
`;
const Photo = styled.div`
  width: 44px;
  height: 44px;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
`;
const BlurP = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1;
  color: #c5c7cd;
  font-weight: 400;
`;
const Td = styled.td`
  padding: 23px 0;
  :first-child {
    width: 70px;
  }
  :last-child {
    text-align: center;
  }
  :hover {
    cursor: pointer;
  }
`;

export const Div = styled.div`
  border-bottom: 1px solid #dfe0eb;
  width: 100%;
  position: absolute;
  right: 0;
`;
function TableItem({
  color,
  text,
  blurText,
  name,
  blurName,
  date,
  blurDate,
  status,
}) {
  return (
    <>
      <Tr>
        <Td>
          <Photo color={color} />
        </Td>
        <Td>
          <P>{text}</P>
          <BlurP> {blurText}</BlurP>
        </Td>
        <Td>
          <P>{name}</P>
          <BlurP> {blurName}</BlurP>
        </Td>
        <Td>
          <P>{date}</P>
          <BlurP> {blurDate}</BlurP>
        </Td>
        <Td>
          <PriorityStatus text={status} />
        </Td>
        <Td>
          <MoreVertical />
        </Td>
      </Tr>
      <Tr>
        <Div></Div>
      </Tr>
    </>
  );
}

export default TableItem;
