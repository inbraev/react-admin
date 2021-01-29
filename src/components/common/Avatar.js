import React from "react";
import styled from "styled-components";
const Figure = styled.figure`
  width: 43px;
  height: 43px;
  position: relative;
  margin: 0 10px;
  :hover {
    cursor: pointer;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
function Avatar({ src }) {
  return (
    <Figure>
      <Img src={src} alt="Current user photo" role="presentation" />
      <figcaption style={{ visibility: "hidden" }}>
        User Profile photo
      </figcaption>
    </Figure>
  );
}

export default Avatar;
