import React from "react";
import Layout from "./pages/Layout";
import ProgressContents from "./pages/ProgressContents";

function App() {
  return (
    <Layout>
      <ProgressContents>
        <div>난이도별 contents</div>
      </ProgressContents>
    </Layout>
  );
}

export default App;
