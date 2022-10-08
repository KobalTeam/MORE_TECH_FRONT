import React from "react";

type Props = {
  name: String;
  localScore: number;
  score: number;
};

const Goal: React.FC<Props> = ({ name, localScore, score }) => (
  <div className="goal">
    <p className="goal__name">{name}</p>

    <div className="goal__content flex flex-row">
      <div className="goal__coin w-3.5 rounded-full border" />

      <div className="goal__bar w-full border rounded-lg relative h-4">
        <div
          className="goal__bar_absolute absolute h-4 bg-green-300"
          style={{ width: "50%" }}
        />
      </div>

      <p className="goal__score">{`${localScore}/${score}`}</p>
    </div>
  </div>
);

export default Goal;
