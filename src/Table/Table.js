import React from "react";
import Title from "./components/Title";
import Headings from "./components/Headings";
import Rows from "./components/Rows";

const Table = ({ titleText, colHeadings, items }) => {
  return (
    <div className="containerLarge">
      <Title titleText={titleText} />
      <table>
        <tbody>
          <Headings colHeadings={colHeadings} />
          <Rows items={items} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
