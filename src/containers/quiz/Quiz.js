import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";

export class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "What is the color of sky?",
        rigthAnswer: 3,
        answers: [
          {
            text: "Red",
            id: 1,
          },
          {
            text: "Green",
            id: 2,
          },
          {
            text: "Blue",
            id: 3,
          },
          {
            text: "Yellow",
            id: 4,
          },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    console.log(answerId);
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Please answer the questions: </h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
