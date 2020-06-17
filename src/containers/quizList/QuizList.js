import React, { Component } from "react";
import axios from "../../axios/axios-quiz";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
import Loader from "../../components/ui/Loader/Loader";

export class QuizList extends Component {
  state = {
    quizes: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/quizes.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Question ${index + 1}`,
        });
      });

      this.setState({ quizes, loading: false });
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
          <h1>All quizes</h1>
          {this.state.loading ? <Loader /> : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}

export default QuizList;
