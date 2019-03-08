import React from "react";
import dog01 from "./dog01.jpg";
import dog02 from "./dog02.jpg";
import dog03 from "./dog03.jpg";
import dog04 from "./dog04.jpg";

const Dogs = () => {
  return (
    <div className="imgContainer">
      <div className="imgBox" style={{ backgroundImage: `url(${dog01})` }} />
      <div className="imgBox" style={{ backgroundImage: `url(${dog02})` }} />
      <div className="imgBox" style={{ backgroundImage: `url(${dog03})` }} />
      <div className="imgBox" style={{ backgroundImage: `url(${dog04})` }} />
    </div>
  );
};

export default Dogs;
