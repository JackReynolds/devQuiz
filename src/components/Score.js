import React from "react";

const Score = (score, questionDataArray) => {
  return (
    <div className="total-score">
      Total Score: <span className="score">{score}</span>/
      <span className="total">{questionDataArray.length}</span>
    </div>
  );
};

export default Score;
