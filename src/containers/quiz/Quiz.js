import React, { Component } from "react";
import axios from "../../axios/axios-quiz";
import classes from "./Quiz.module.css";
import { ActiveQuiz } from "../../components/activeQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/finishedQuiz/FinishedQuiz";
import Loader from "../../components/ui/loader/Loader";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    loading: true,
    quiz: [
      {
        question: "What is the color of sky?",
        rigthAnswerId: 2,
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
        rigthAnswerId: 2,
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
    const results = this.state.results;

    if (question.rigthAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results,
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
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results,
      });
    }
  };

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      isFinished: false,
      results: [],
      answerState: null,
    });
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `/quizes/${this.props.match.params.id}.json`
      );
      const quiz = response.data;

      this.setState({ quiz, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {this.state.loading ? (
            <Loader />
          ) : this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
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
