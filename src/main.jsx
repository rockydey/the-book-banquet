import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home/Home";
import ListedBooks from "./assets/components/ListedBooks/ListedBooks";
import PagesToRead from "./assets/components/PagesToRead/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listed-books",
    element: <ListedBooks />,
  },
  {
    path: "/pages-read",
    element: <PagesToRead />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
