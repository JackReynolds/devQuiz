import React from "react";
import QuestionList from "./QuestionList";
import "../css/Questions.css";

const CSS = ({ questionDataArray }) => {
  return (
    <div>
      <h1 className="page-heading">HTML Questions</h1>
      <hr className="heading-break-line" />
      <QuestionList questionDataArray={questionDataArray} />
    </div>
  );
};

export default CSS;
