import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./pages/Layout";
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
