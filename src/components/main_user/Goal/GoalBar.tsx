import React from "react";
import CountGoal from "@components/main_user/Goal/CountGoal";

const GoalBar = (): JSX.Element => (
  // const progress_bars = document.querySelectorAll('.goal');
  //   progress_bars.forEach(bar => {
  //     const { size } = bar.dataset;
  //     bar.style.width = `${size}%`;
  // });
  <div className="main-goal-bar">
    <div className="goal-bar">
      <div
        // data-size="20"
        className="goal"></div>
    </div>
    <CountGoal />
  </div>
);

export default GoalBar;
