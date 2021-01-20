import React from "react";
import styled from "styled-components";
const data = [
  { title: "Unresolved", info: 60 },
  { title: "Overdue", info: 16 },
  { title: "Open", info: 43 },
  { title: "On hold", info: 64 },
];

 
export const CardsStatistics = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5.8rem;
`;
export const CardInfo = styled.h4`
  font-weight: 700;
  text-align: center;
  width: 19.4rem;
  line-height: 5rem;
  font-size: 4rem;
  margin: 0 3.2rem;
  margin-bottom: 2.4rem;
  letter-spacing: 1px;
`;
export const CardItem = styled.article`
  border: 1px solid #dfe0eb;
  align-items: center;
  flex: 0 1 19.4rem;
  justify-content: center;
  border-radius: 8px;
  /* margin-top: 5.8rem; 
  добавить данное свойтство в media to do
  */
  background: #ffffff;
  transition: all 0.5s;
  &:hover {
    color: #3751ff;
    cursor: pointer;
    border: 1px solid #3751ff;
    transform: scale(1.1);
  }
`;
export const CardTitle = styled(CardInfo)`
  color: #9fa2b4;
  letter-spacing: 0.4px;
  text-transform: capitalize;
  margin-bottom: 1.2rem;
  line-height: 2.3rem;
  font-size: 1.9rem;
  margin-top: 2.4rem;
  transition: 0.5s;
  ${CardItem}:hover & {
    color: #3751ff;
  }
`;

function Cards({ title, info }) {
  return (
    <CardItem>
      <CardTitle>{title}</CardTitle>
      <CardInfo>{info}</CardInfo>
    </CardItem>
  );
}

export default Cards;
