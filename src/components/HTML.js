import React, { useState, useRef } from "react";
import "../css/HTML.css";

const HTML = ({ htmlQuestions, heading }) => {
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
    <div>
      <h1 className="page-heading">HTML Questions</h1>
      <hr className="heading-break-line" />
      {htmlQuestions.map((htmlQuestion) => {
        return (
          <div className="question-container" key={htmlQuestion.number}>
            <div className="question-number">
              <strong>Question number: {htmlQuestion.number}</strong>
            </div>
            <hr className="break-line" />
            <div className="question">{htmlQuestion.question}</div>
            <div className="answer-container">
              <div
                id={htmlQuestion.number}
                className={
                  showAnswerNumber == htmlQuestion.number
                    ? "answer"
                    : "answer hidden"
                }
                dangerouslySetInnerHTML={{ __html: htmlQuestion.answer }}
              >
                {/* {htmlQuestion.answer} */}
              </div>
              <button
                id={htmlQuestion.number}
                className={
                  showAnswerNumber == htmlQuestion.number
                    ? "hidden"
                    : "button is-primary"
                }
                onClick={hideButtonShowAnswer}
              >
                Show answer
              </button>
              {showAnswerNumber == htmlQuestion.number ? (
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
      })}
      <div className="total-score">
        Total Score: <span className="score">{score}</span>/
        <span className="total">{htmlQuestions.length}</span>
      </div>
    </div>
  );
};

export default HTML;
