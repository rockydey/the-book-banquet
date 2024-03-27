import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home/Home";
import ListedBooks from "./assets/components/ListedBooks/ListedBooks";
import PagesToRead from "./assets/components/PagesToRead/PagesToRead";
import BookDetails from "./assets/components/BookDetails/BookDetails";
import NotFound from "./assets/components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listed-books",
    element: <ListedBooks />,
    loader: () => fetch("../public/books.json"),
  },
  {
    path: "/pages-read",
    element: <PagesToRead />,
    loader: () => fetch("../public/books.json"),
  },
  {
    path: "/book/:bookId",
    element: <BookDetails />,
    loader: () => fetch("../public/books.json"),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
