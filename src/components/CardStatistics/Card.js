import React from "react";
import { CardInfo, CardTitle, CardItem } from "../common/Cards";

function Card({ title, info }) {
  return (
    <CardItem>
      <CardTitle>{title}</CardTitle>
      <CardInfo>{info}</CardInfo>
    </CardItem>
  );
}

export default Card;
