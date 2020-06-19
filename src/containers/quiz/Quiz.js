import React, { Component } from "react";
import classes from "./Quiz.module.css";
import { ActiveQuiz } from "../../components/activeQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/finishedQuiz/FinishedQuiz";
import Loader from "../../components/ui/Loader/Loader";
import { connect } from "react-redux";
import { fetchQuizById } from "../../store/actions/quizActions";

class Quiz extends Component {
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
    this.props.fetchQuizById(this.props.match.params.id);
  }

  render() {
    return (
      <div className={classes.Quiz}>
        props
        <div className={classes.QuizWrapper}>
          {this.props.loading ? (
            <Loader />
          ) : this.props.isFinished && this.props.quiz ? (
            <FinishedQuiz
              results={this.props.results}
              quiz={this.props.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <>
              <h1>Answer the question: </h1>
              <ActiveQuiz
                answers={this.props.quiz[this.props.activeQuestion].answers}
                question={this.props.quiz[this.props.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.props.quiz.length}
                answerNumber={this.props.activeQuestion + 1}
                state={this.props.answerState}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: (id) => dispatch(fetchQuizById(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
