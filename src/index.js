import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./components/ErrorPage";
import Pets from "./components/Pets";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import "./index.css";
import Accessories from "./components/Accessories";
import SingleAccessoriesProduct from "./components/SingleAccessoriesProduct";
import Food from "./components/Food";
import Cart from "./components/Cart";
import SinglePetProduct from "./components/SinglePetProduct";
import SigleFoodProduct from "./components/SingleFoodProduct";
import AllProducts from "./components/AllProducts";
import SingleAllProductsPage from "./components/SingleAllProductsPage";
import Register from "./components/Register";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "/:singleId",
        element: <SingleAllProductsPage />,
      },
      {
        path: "/pets",
        element: <Pets />,
      },
      {
        path: "pets/:petsId",
        element: <SinglePetProduct />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "accessories/:accessoriesId",
        element: <SingleAccessoriesProduct />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "food/:foodId",
        element: <SigleFoodProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
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
