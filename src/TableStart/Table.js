import React from "react";
import Title from "./components/Title";
import Headings from "./components/Headings";
import Rows from "./components/Rows";

const Table = () => {
  return (
    <div className="containerLarge">
      <Title />
      <table>
        <tbody>
          <Headings />
          <Rows />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
