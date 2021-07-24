import React, { Fragment } from "react";
import Header from "./Header";
import HTML from "./HTML";
import Route from "./Route";
import CSS from "./CSS";
import "../css/App.css";
import Link from "./Link";
import htmlQuestions from "../questions/htmlQuestions";
import cssQuestions from "../questions/cssQuestions";
import jsQuestions from "../questions/jsQuestions";
import mongodbQuestions from "../questions/mongodbQuestions";
import nodeQuestions from "../questions/nodeQuestions";
import reactQuestions from "../questions/reactQuestions";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Route path="/">
        <div className="landing-page-container">
          <h1 className="landing-page-heading">
            Choose a quiz or language to get started!
          </h1>
        </div>
        <div className="select-quiz-container">
          <Link href="/html" className="quiz-icon">
            HTML
          </Link>
          <Link href="/css" className="quiz-icon">
            CSS
          </Link>
          <Link href="/javascript" className="quiz-icon">
            JavaScript
          </Link>
          <Link href="/react" className="quiz-icon">
            React.js
          </Link>
          <Link href="/node" className="quiz-icon">
            Node.js
          </Link>
          <Link href="/mongodb" className="quiz-icon">
            MongoDB
          </Link>
        </div>
      </Route>

      <Route path="/html">
        <HTML questionDataArray={htmlQuestions} />
      </Route>
      <Route path="/css">
        <CSS questionDataArray={cssQuestions} />
      </Route>
      {/* <Route path="/javascript">
        <JavaScript htmlQuestions={jsQuestions} />
      </Route>
      <Route path="/react">
        <React htmlQuestions={reactQuestions} />
      </Route>
      <Route path="/node">
        <Node htmlQuestions={nodeQuestions} />
      </Route>
      <Route path="/mongodb">
        <MongoDB htmlQuestions={mongodbQuestions} />
      </Route> */}
    </Fragment>
  );
};

export default App;
