import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import SelectPerformance from "./pages/step1/SelectPerformance";
import SelectRound from "./pages/step1/SelectRound";
import ProgressContents from "./pages/ProgressContents";
import SelectPayMethod from "./pages/step4/SelectPayMethod";

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
            path: "step1-1",
            element: <SelectPerformance />
          },
          {
            path: "step1-2",
            element: <SelectRound />
          },
          {
            path: "step4-1",
            element: <SelectPayMethod />
          }
        ]
      }
    ]
  }
]);

export default router;
