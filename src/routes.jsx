import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./pages/Layout";
import Intro from "./pages/step0/Intro";
import SelectPerformance from "./pages/step1/SelectPerformance";
import SelectRound from "./pages/step1/SelectRound";
import ProgressContents from "./pages/ProgressContents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "progress",
        element: <ProgressContents />,
        children: [
          {
            path: "step0",
            element: <Intro />
          },
          {
            path: "step1-1",
            element: <SelectPerformance />
          },
          {
            path: "step1-2",
            element: <SelectRound />
          }
        ]
      }
    ]
  }
]);

export default router;
