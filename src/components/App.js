import React, { Fragment } from "react";
import Header from "./Header";
import HTML from "./HTML";
import Route from "./Route";
import "../css/App.css";
import htmlQuestions from "../questions/html";

const item = 10;

const App = () => {
  return (
    <Fragment>
      <Header />
      <Route path="/">
        <div>Hello there - homepage</div>
      </Route>

      <Route path="/html">
        <HTML htmlQuestions={htmlQuestions} />
      </Route>
    </Fragment>
  );
};

export default App;
