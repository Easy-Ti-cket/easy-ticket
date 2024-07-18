import React from "react";
import Layout from "./pages/Layout";
import ProgressContents from "./pages/ProgressContents";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <Layout>
      <ProgressContents>
        <Timer second={30} type="second" />
        <Timer second={900} type="minute" />
      </ProgressContents>
    </Layout>
  );
}

export default App;
