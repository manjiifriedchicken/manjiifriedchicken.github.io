import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index.jsx";
import ReactGA from "react-ga4";
import Hotjar from "@hotjar/browser";
import MenuPage from "./pages/MenuPage.jsx";
import "./main.scss";
import { menu } from "./menu.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/UI/Layout.jsx";

const siteId = 3803867;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
ReactGA.initialize("G-6Z1ZX2KNHS");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "Manjii",
});

function getMenuPage(slug) {
  const menuPage = menu.find((item) => item.slug === slug);
  if (!menuPage) {
    throw new Error("Menu page not found");
  }
  return menuPage;
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/:slug",
        element: <MenuPage />,
        loader: ({ params }) => {
          return getMenuPage(params.slug);
        },
      },
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
