import React from "react";
import Layout from "./hoc/layout/Layout";
import Quiz from "./containers/quiz/Quiz";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Quiz} />
        <Route path="/quiz-creator" component={Quiz} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={Quiz} />
      </Switch>
      <Quiz />
    </Layout>
  );
}

export default App;
