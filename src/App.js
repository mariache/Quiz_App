import React from "react";
import Layout from "./hoc/layout/Layout";
import Quiz from "./containers/quiz/Quiz";

function App() {
  return (
    <Layout>
      <div>
        <Quiz />
      </div>
    </Layout>
  );
}

export default App;
