import React from "react";

type Props = {
  value: string;
};

const TableHeader: React.FC<Props> = ({ value }): JSX.Element => (
  <p className="score-table__header__text ml-8 text-xl font-nunito font-bold basis-1/5">
    {value}
  </p>
);

export default TableHeader;
