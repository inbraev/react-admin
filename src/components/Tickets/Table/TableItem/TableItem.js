import React from "react";
import styled from "styled-components";
import PriorityStatus from "../../../common/PriorityStatus";
import MoreVertical from "./Icon";
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
  :first-child {
    width: 90px;
  }
  :last-child {
    text-align: center;
  }
  :hover {
    cursor: pointer;
  }
`;
const Tr = styled.tr`
  padding: 20px 0;
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
  );
}

export default TableItem;
