import React, { useState } from "react";
import Question from "./Question";

const QuestionList = ({ questionDataArray }) => {
  let [score, setScore] = useState(0);

  const updateScore = (correct, isDisabled) => {
    if (correct) {
      setScore(score + 1);
    }
  };

  console.log(questionDataArray);
  return (
    <div>
      {questionDataArray.map((questionData) => {
        return (
          <div>
            <Question questionData={questionData} updateScore={updateScore} />;
          </div>
        );
      })}
      <div className="total-score">
        Total Score: <span className="score">{score}</span>/
        <span className="total">{questionDataArray.length}</span>
      </div>
    </div>
  );
};

export default QuestionList;

//
