import React from "react";
import Graphic from "./Graphic";
import styled from "styled-components";
import TrendCards from "./TrendCards";
const GraphicSection = styled.section`
  display: flex;
  margin-top: 30px;
`;

function Trends({ trendData }) {
  return (
    <GraphicSection>
      <Graphic />
      <TrendCards trendData={trendData} />
    </GraphicSection>
  );
}

export default Trends;
