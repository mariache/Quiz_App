import React, { useEffect } from "react";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { connect } from "react-redux";
import { fetchQuizes } from "../../store/actions/quiz";

const QuizList = (props) => {
  useEffect(() => {
    props.fetchQuizes();
  }, [props]);

  const renderQuizes = () => {
    return props.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  };

  return (
    <div className={classes.QuizList}>
      <div>
        <h1>All quizes</h1>

        {props.loading && props.quizes.length !== 0 ? (
          <Loader />
        ) : (
          <ul>{renderQuizes()}</ul>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
