import React, { useState, useRef } from "react";

const Question = ({ questionData }) => {
  const yesButton = useRef();
  const noButton = useRef();

  const [showAnswerNumber, setShowAnswerNumber] = useState();
  let [score, setScore] = useState(0);

  const hideButtonShowAnswer = (event) => {
    setShowAnswerNumber(event.target.id);
  };

  const correctAnswer = () => {
    // setShowAnswerNumber(0);
    setScore((score += 1));
    console.log(score);
    yesButton.current.className = "button is-success yes-button";
    noButton.current.className = "button is-danger no-button";
  };

  const incorrectAnswer = () => {
    yesButton.current.className = "button is-danger yes-button";
    noButton.current.className = "button is-success yes-button";
  };

  return (
    <div className="question-container" key={questionData.number}>
      <div className="question-number">
        <strong>Question number: {questionData.number}</strong>
      </div>
      <hr className="break-line" />
      <div
        className="question"
        dangerouslySetInnerHTML={{ __html: questionData.question }}
      ></div>
      <div className="answer-container">
        <div
          id={questionData.number}
          className={
            showAnswerNumber == questionData.number ? "answer" : "answer hidden"
          }
          dangerouslySetInnerHTML={{ __html: questionData.answer }}
        ></div>
        <button
          id={questionData.number}
          className={
            showAnswerNumber == questionData.number
              ? "hidden"
              : "button is-primary"
          }
          onClick={hideButtonShowAnswer}
        >
          Show answer
        </button>
        {showAnswerNumber == questionData.number ? (
          <div>
            <p className="correct-answer-question">
              Did you get the answer correct?
            </p>
            <button
              ref={yesButton}
              className="button is-warning yes-button"
              onClick={correctAnswer}
            >
              Yes
            </button>
            <button
              ref={noButton}
              className="button is-light no-button"
              onClick={incorrectAnswer}
            >
              No
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Question;
