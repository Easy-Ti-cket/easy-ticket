import React from "react";
import Layout from "./pages/Layout";
import ProgressContents from "./pages/ProgressContents";

function App() {
  return (
    <Layout>
      <ProgressContents
        text={"예매하려는 포스터를 선택해주세요"}
      ></ProgressContents>
    </Layout>
  );
}

export default App;
