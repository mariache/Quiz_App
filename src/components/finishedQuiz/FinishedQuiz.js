import React from "react";
import classes from "./FinishedQuiz.module.css";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";

export const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  const resultSuccess = (successCount / props.quiz.length) * 100;

  return (
    <div className={classes.FinishedQuiz}>
      <h1>Congrats!!!</h1>
      <p>
        You have {resultSuccess > 50 ? "successfully " : "unsuccessfully "}
        finished the quiz
      </p>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            classes[props.results[quizItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p>
        Correct {successCount} out of {props.quiz.length}
      </p>
      <div>
        <Button onClick={props.onRetry} type="primary">
          Try again
        </Button>
        <Link to="/">
          <Button type="success">Back to all tests</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
