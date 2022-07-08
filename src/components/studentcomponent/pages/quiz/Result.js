import React from "react";
import './Quiz.css';

const Result = ({score, attemptAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 10 correct answers!</div>
    <button className="playBtn" onClick={attemptAgain}>
      <b>Attempt Again!</b>
    </button>
  </div>
);

export default Result;