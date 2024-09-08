import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //fireBase 사용량 제한으로 인해 StrictMode 주석처리
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
