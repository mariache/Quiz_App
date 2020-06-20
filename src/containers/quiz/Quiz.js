import React, { Component } from "react";
import classes from "./Quiz.module.css";
import { ActiveQuiz } from "../../components/activeQuiz/ActiveQuiz";
import { FinishedQuiz } from "../../components/finishedQuiz/FinishedQuiz";
import Loader from "../../components/ui/Loader/Loader";
import { connect } from "react-redux";
import {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz,
} from "../../store/actions/quizActions";

class Quiz extends Component {
  async componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.retryQuiz();
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
                onAnswerClick={this.props.quizAnswerClick}
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
    quizAnswerClick: (answerId) => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
