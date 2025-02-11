import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./components/ErrorPage";
import SingleProduct from "./components/SinglePetProduct";
import Pets from "./components/Pets";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import "./index.css";
import Accessories from "./components/Accessories";
import SingleAccessoriesProduct from "./components/SingleAccessoriesProduct";
import Food from "./components/Food";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Pets />,
      },
      {
        path: "/pets",
        element: <Pets />,
      },
      {
        path: "pets/:Id",
        element: <SingleProduct />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "accessories/:Id",
        element: <SingleAccessoriesProduct />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "food/:Id",
        element: <SingleAccessoriesProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
