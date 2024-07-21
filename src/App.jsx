import React from "react";
import Layout from "./pages/Layout";
import ProgressContents from "./pages/ProgressContents";
import Card from "./components/card/Card";

function App() {
  return (
    <Layout>
      <ProgressContents>
        <Card />
      </ProgressContents>
    </Layout>
  );
}

export default App;
