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
  @media (max-width: 932px) {
    border: none;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 546px;
  @media (max-width: 785px) {
    width: 600px;
    height: 446px;
  }
  @media (max-width: 685px) {
    width: 500px;
    height: 346px;
  }
  @media (max-width: 585px) {
    width: 450px;
    height: 246px;
  }
  @media (max-width: 530px) {
    width: 350px;
    height: 246px;
  }
  @media (max-width: 427px) {
    width: 280px;
    height: 246px;
  }
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
