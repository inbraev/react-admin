import React from "react";
import Image from "../../../images/graphic.png";

function Graphic() {
  return (
    <figure>
      <picture>
        {/* <source
          media="(max-width:430px)"
          srcSet="https://avatars3.githubusercontent.com/u/33125105?s=460&u=ffe12f9e1cbbcb60a6464dea934bada975a798d6&v=4"
        /> */}

        <img
          src={Image}
          role="presentation"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            maxWidth: "100%",
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          alt="Today trends is 38"
        />
      </picture>
      <figcaption style={{ visibility: "hidden" }}>
        Today trends is 38
      </figcaption>
    </figure>
  );
}

export default Graphic;
