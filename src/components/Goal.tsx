import React from "react";

type Props = {
  name: String;
  localScore: number;
  score: number;
};

const Goal: React.FC<Props> = ({ name, localScore, score }) => (
  <div className="goal mt-5 mx-5">
    <p className="goal__name text-xl uppercase text-center font-nunito">
      {name}
    </p>

    <div className="goal__content flex flex-row mt-3">
      <div className="goal__coin w-5 rounded-full border bg-white" />

      <div className="goal__bar w-full rounded-lg relative h-5 ml-2 bg-white">
        <div
          className="goal__bar_absolute absolute rounded-lg h-5 bg-green-400"
          style={{ width: `${(localScore / score) * 100}%` }}
        />
      </div>

      <p className="goal__score ml-2 font-nunito">{`${localScore}/${score}`}</p>
    </div>
  </div>
);

export default Goal;
