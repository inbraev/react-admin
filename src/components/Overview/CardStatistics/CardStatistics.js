import React from "react";
import styled from "styled-components";
import Card from "./Card";

export const CardsStatisticsRow = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 738px) {
    flex-wrap: wrap;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
function CardStatistics(props) {
  const { data } = props;
  return (
    <CardsStatisticsRow>
      {data.map((card, index) => {
        return <Card key={index} title={card.title} info={card.info} />;
      })}
    </CardsStatisticsRow>
  );
}

export default CardStatistics;
