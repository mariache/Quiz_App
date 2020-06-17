import React, { Component } from "react";
import { Layout } from "./hoc/layout/Layout";
import { Route, Switch } from "react-router-dom";
import Quiz from "./containers/quiz/Quiz";
import QuizList from "./containers/quizList/QuizList";
import Auth from "./containers/auth/Auth";
import QuizCreator from "./containers/quizCreator/QuizCreator";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
