import React from "react";
import { CardTitle, CardInfo, CardItem } from "../common/Cards";
import styled from "styled-components";
const TrendCardTitle = styled(CardTitle)`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;
const TrendCardInfo = styled(CardInfo)`
  font-size: 2.4rem;
  line-height: 3rem;
`;
const TrendCardItem = styled(CardItem)`
  line-height: 30px;
  font-size: 2.4rem;
  flex: 0 1;
  border-radius: 0px;
  &:first-child {
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-right-radius: 8px;
  }
`;

function TrendCard({ title, info }) {
  return (
    <TrendCardItem>
      <TrendCardTitle>{title}</TrendCardTitle>
      <TrendCardInfo>{info}</TrendCardInfo>
    </TrendCardItem>
  );
}

export default TrendCard;
