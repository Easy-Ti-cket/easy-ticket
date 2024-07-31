// App.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import MyBookingInfo from "./components/myBookingInfo/MyBookinfInfo";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
