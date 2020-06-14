import React from "react";
import classes from "./FinishedQuiz.module.css";

export const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <h1>Congrats!!!</h1>
      <p>I have successfully finished the quiz</p>
      <ul>
        <li>
          <strong>1. </strong>
          You have
          <i className={"fa fa-times " + classes.error}></i>
        </li>
        <li>
          <strong>2. </strong>
          You have
          <i className={"fa fa-check " + classes.success}></i>
        </li>
      </ul>
      <p>Correct 4 out of 10</p>
      <div>
        <button>Try again</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
