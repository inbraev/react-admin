import React from "react";
import Image from "../../images/graphic.png";
function Graphic() {
  return (
    <figure>
      <picture>
        <source
          media="(max-width:1000px)"
          srcset="https://avatars3.githubusercontent.com/u/33125105?s=460&u=ffe12f9e1cbbcb60a6464dea934bada975a798d6&v=4"
        />
        <img src={Image} alt="Today trends is 38" />
      </picture>
    </figure>
  );
}

export default Graphic;
