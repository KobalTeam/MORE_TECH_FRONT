import React from "react";

type Element = {
  value: string | number;
};

const TableElement: React.FC<Element> = ({ value }) => (
  <li className="score-table__element ml-8 font-nunito text-xl basis-1/5">
    {value}
  </li>
);

export default TableElement;
