import React from "react";
import Layout from "./pages/Layout";
import ProgressContents from "./pages/ProgressContents";
import CardForm from "./components/forms/CardForm";
import Input from "./components/input/Input";

function App() {
  return (
    <Layout>
      <ProgressContents>
        {/* <CardForm /> */}
        <Input focus={focus} />
      </ProgressContents>
    </Layout>
  );
}

export default App;
