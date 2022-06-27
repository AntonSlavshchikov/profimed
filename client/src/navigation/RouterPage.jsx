import { App } from "../App";
import { News } from "../pages/News/News";
import { Home } from "../pages/Home/Home";
import { Services } from "../pages/Services/Services";
import { Documents } from "../pages/Documents/Documents";
import { Workers } from "../pages/Workers/Workers";
import { WorkerInfo } from "../pages/WorkerInfo/WorkerInfo";
import { About } from "../pages/About/About";
import { Vacancy } from "../pages/Vacancy/Vacancy";
import { Reviews } from "../pages/Reviews/Reviews";

import { Routes, Route } from "react-router-dom";

export const routerPage = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "documents",
    element: <Documents />,
  },
  {
    path: "workers",
    element: <Workers />,
  },
  {
    path: "workers/:id",
    element: <WorkerInfo />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "vacancy",
    element: <Vacancy />,
  },
  {
    path: "reviews",
    element: <Reviews />,
  },
  {
    path: "*",
    element: <Home to="" />,
  },
];
