import React from "react";

type Props = {
  list: Array<string>;
};

const Activities: React.FC<Props> = ({ list }) => (
  <div className="bg-blue-200 mx-5 mt-3 rounded-md">
    <ul className="list_activities p-4">
      {list.map(elem => (
        <li className="font-nunito">{elem}</li>
      ))}
    </ul>
  </div>
);

export default Activities;
