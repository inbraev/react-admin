import React from "react";
import styled from "styled-components";
import TrendCard from "./TrendCard";
const TrendStatistics = styled.article`
  display: flex;
  flex-direction: column;
 
`;
function TrendCards({ trendData }) {
  return (
    <TrendStatistics>
      {trendData.map(({ title, info }, index) => {
        return <TrendCard title={title} info={info} key={index} />;
      })}
    </TrendStatistics>
  );
}
export default TrendCards;
