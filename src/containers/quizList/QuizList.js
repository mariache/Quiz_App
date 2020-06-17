import React, { Component } from "react";
import axios from "axios";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";

export class QuizList extends Component {
  state = {
    quizes: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://quiz-a55c5.firebaseio.com/quizes.json"
      );
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Question ${index + 1}`,
        });
      });

      this.setState({ quizes });
    } catch (e) {
      console.log(e);
    }
  }

  renderQuizes() {
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>All tests</h1>

          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
