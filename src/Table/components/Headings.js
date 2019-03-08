import React from "react";

const Headings = ({ colHeadings }) => {
  console.log(colHeadings);
  return (
    <tr>
      {colHeadings.map((heading, idx) => (
        <th key={`${idx}-${heading}`}>{heading}</th>
      ))}
    </tr>
  );
};

export default Headings;
