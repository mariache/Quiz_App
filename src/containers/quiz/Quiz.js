import React, { Component } from "react";
import classes from "./Quiz.module.css";
import { ActiveQuiz } from "../../components/activeQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/finishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "What is the color of sky?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Red", id: 1 },
          { text: "Blue", id: 2 },
          { text: "Green", id: 3 },
          { text: "Orange", id: 4 },
        ],
      },
      {
        question: "When did Russia last host the Olympics?",
        rightAnswerId: 2,
        id: 2,
        answers: [
          { text: "2016", id: 1 },
          { text: "2014", id: 2 },
          { text: "2015", id: 3 },
          { text: "2017", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "success" },
      });

      const INTERVAL = 1000;

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, INTERVAL);
    } else {
      this.setState({
        answerState: { [answerId]: "error" },
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {this.state.isFinished ? (
            <FinishedQuiz />
          ) : (
            <>
              <h1>Answer the question: </h1>
              <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
