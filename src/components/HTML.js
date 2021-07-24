import React, { useState, useRef } from "react";
import QuestionList from "./QuestionList";
import "../css/Questions.css";

const HTML = ({ questionDataArray }) => {
  console.log(questionDataArray);
  //   const yesButton = useRef();
  //   const noButton = useRef();

  //   const [showAnswerNumber, setShowAnswerNumber] = useState();
  //   let [score, setScore] = useState(0);

  //   const hideButtonShowAnswer = (event) => {
  //     setShowAnswerNumber(event.target.id);
  //   };

  //   const correctAnswer = () => {
  //     // setShowAnswerNumber(0);
  //     setScore((score += 1));
  //     console.log(score);
  //     yesButton.current.className = "button is-success yes-button";
  //     noButton.current.className = "button is-danger no-button";
  //   };

  //   const incorrectAnswer = () => {
  //     yesButton.current.className = "button is-danger yes-button";
  //     noButton.current.className = "button is-success yes-button";
  //   };

  return (
    <div>
      <h1 className="page-heading">HTML Questions</h1>
      <hr className="heading-break-line" />
      <QuestionList questionDataArray={questionDataArray} />
      {/* <div className="total-score">
        Total Score: <span className="score">{score}</span>/
        <span className="total">{questions.length}</span>
      </div> */}
    </div>
  );
};

export default HTML;
