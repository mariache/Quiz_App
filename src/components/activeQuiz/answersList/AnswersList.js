import React from "react";
import classes from "./AnswersList.module.css ";

export const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      <li>{props.answers.map((answer, index) => {})}</li>
    </ul>
  );
};

export default AnswersList;
