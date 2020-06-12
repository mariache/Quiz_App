import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./answersList/AnswersList";

export const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>2.</strong>&nbsp; {props.question}
        </span>
        <small>4 from 12</small>
      </p>
      <ul>
        <AnswersList
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
        />
      </ul>
    </div>
  );
};

export default ActiveQuiz;
