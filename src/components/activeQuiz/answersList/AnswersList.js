import React from "react";
import classes from "./AnswersList.module.css ";
import { AnswerItem } from "./answerItem/AnswerItem";

export const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      <li>
        {props.answers.map((answer, index) => {
          return <AnswerItem answer={answer} />;
        })}
      </li>
    </ul>
  );
};

export default AnswersList;
