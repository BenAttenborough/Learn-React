import React from "react";

const Rows = ({ items }) => {
  //   console.log(items);
  return [
    items.map((rows, idx) => (
      <tr key={`${idx}`}>
        {rows.map((item, idx) => {
          switch (item.type) {
            case "TEXT":
              return <td key={`${idx}-${item.content}`}>{item.content}</td>;
            case "BUTTON":
              return (
                <td key={`${idx}-${item.content.label}`}>
                  <button onClick={item.content.onClick}>
                    {item.content.label}
                  </button>
                </td>
              );
            default:
              return <td>Error, unknown type</td>;
          }
        })}
      </tr>
    ))
  ];
};

export default Rows;
