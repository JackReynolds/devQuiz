import React, { useState } from "react";
import "../css/HTML.css";

const HTML = ({ htmlQuestions }) => {
  const [showAnswerNumber, setShowAnswerNumber] = useState();
  const hideButtonShowAnswer = (event) => {
    setShowAnswerNumber(event.target.id);
  };

  return (
    <div>
      {htmlQuestions.map((htmlQuestion) => {
        return (
          <div className="question-container" key={htmlQuestion.number}>
            <div className="question-number">
              Question number: {htmlQuestion.number}
            </div>
            <div className="question">{htmlQuestion.question}</div>
            <div
              id={htmlQuestion.number}
              className={
                showAnswerNumber == htmlQuestion.number
                  ? "answer"
                  : "answer hidden"
              }
            >
              {htmlQuestion.answer}
            </div>
            <button
              id={htmlQuestion.number}
              className={
                showAnswerNumber == htmlQuestion.number
                  ? "button is-danger"
                  : "button is-primary"
              }
              onClick={hideButtonShowAnswer}
            >
              Show answer
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default HTML;
