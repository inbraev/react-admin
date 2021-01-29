import React from "react";
import styled from "styled-components";
import {
  CardInfo as Info,
  CardTitle as Title,
  CardItem as Item,
} from "../../common/Cards";
const CardItem = styled(Item)`
  @media (max-width: 930px) {
    flex: 0 1 15rem;
  }
  @media (max-width: 738px) {
    flex: 0 1 50%;
  }
  @media (max-width: 400px) {
    margin-bottom: 15px;
  }
`;
const CardInfo = styled(Info)`
  @media (max-width: 930px) {
    font-size: 3rem;
    margin-bottom: 0.8rem;
  }
`;
const CardTitle = styled(Title)`
  @media (max-width: 930px) {
    font-size: 1.5rem;
  }
`;

function Card({ title, info }) {
  return (
    <CardItem>
      <CardTitle>{title}</CardTitle>
      <CardInfo>{info}</CardInfo>
    </CardItem>
  );
}

export default Card;
