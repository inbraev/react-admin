import React from "react";
import styled from "styled-components";
import Card from "./Card";

export const CardsStatisticsRow = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5.8rem;
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
