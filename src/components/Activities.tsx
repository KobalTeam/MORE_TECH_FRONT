import React from "react";

type Props = {
  list: Array<string>;
};

const Activities: React.FC<Props> = ({ list }) => (
  <div className="bg-white mx-5 mt-3 rounded-md">
    <ul className="p-4 list-disk">
      {list.map(elem => (
        <li className="font-nunito">{elem}</li>
      ))}
    </ul>
  </div>
);

export default Activities;
