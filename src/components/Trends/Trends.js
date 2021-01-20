import React from "react";
import Graphic from "./Graphic";
import styled from "styled-components";
import TrendCards from "./TrendCards";
const GraphicSection = styled.section`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background: #fff;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 900px;
  height: 546px;
`;
function Trends({ trendData }) {
  return (
    <GraphicSection>
      <ImageWrapper>
        <Graphic />
      </ImageWrapper>

      <TrendCards trendData={trendData} />
    </GraphicSection>
  );
}

export default Trends;
