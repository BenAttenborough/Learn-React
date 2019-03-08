import React from "react";
import cat01 from "./cat01.jpg";
import cat02 from "./cat02.jpg";
import cat03 from "./cat03.jpg";
import cat04 from "./cat04.jpg";

const Cats = () => {
  return (
    <div className="imgContainer">
      <div className="imgBox" style={{ backgroundImage: `url(${cat01})` }} />
      <div className="imgBox" style={{ backgroundImage: `url(${cat02})` }} />
      <div className="imgBox" style={{ backgroundImage: `url(${cat03})` }} />
      <div className="imgBox" style={{ backgroundImage: `url(${cat04})` }} />
    </div>
  );
};

export default Cats;
