import React from "react";
import Graphic from "./Graphic";
import styled from "styled-components";
import TrendCard from './TrendCard'
const GraphicSection = styled.section`
  display: flex;
  margin-top: 30px;
`;
const TrendStatistics = styled.article`
  display: flex;
  flex-direction: column;
`;

function Trends() {
  return (
    <GraphicSection>
      <Graphic />
      <TrendStatistics>
          <TrendCard title='asdsd' info='65'></TrendCard>
      </TrendStatistics>
    </GraphicSection>
  );
}

export default Trends;
