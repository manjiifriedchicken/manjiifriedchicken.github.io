import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index.jsx";
import ReactGA from "react-ga4";
import Hotjar from '@hotjar/browser';
import "./main.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


const siteId = 3803867;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
ReactGA.initialize("G-6Z1ZX2KNHS");
ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Manjii" });

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Index />}></Route>),
  { basename: "/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
