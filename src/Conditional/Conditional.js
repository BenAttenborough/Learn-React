import React, { useState } from "react";
import Cats from "./Cats";
import Dogs from "./Dogs";

const Conditional = () => {
  const [animal, setAnimal] = useState("NONE");
  return (
    <div className="containerLarge">
      <h1>Dogs and cats</h1>
      {animal === "CATS" && <Cats />}
      {animal === "DOGS" && <Dogs />}
      <button onClick={() => setAnimal("CATS")}>Click for cats!</button>
      <button onClick={() => setAnimal("DOGS")}>Click for dogs!</button>
    </div>
  );
};

export default Conditional;
