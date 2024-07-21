import React from "react";
import Layout from "./pages/Layout";
import ProgressContents from "./pages/ProgressContents";
import CardForm from "./components/forms/CardForm";

function App() {
  return (
    <Layout>
      <ProgressContents>
        <CardForm />
      </ProgressContents>
    </Layout>
  );
}

export default App;
