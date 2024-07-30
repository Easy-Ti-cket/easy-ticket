import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./pages/Layout";
import Intro from "./pages/step0/Intro";
import SelectPerformance from "./pages/step1/SelectPerformance";
import SelectRound from "./pages/step1/SelectRound";
import ProgressContents from "./pages/ProgressContents";
import Main from "./pages/main/Main";
import SelectLevel from "./pages/selectLevel/SelectLevel";
import Step5 from "./pages/step5/Step5";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "main", element: <Main /> },
      { path: "select-level", element: <SelectLevel /> },
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
          },
          {
            path: "step5",
            element: <Step5 />
          }
        ]
      }
    ]
  }
]);

export default router;
