import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import BookDetails from "./components/BookDetails/BookDetails";
import BookClub from "./components/BookClub/BookClub";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listed-books",
    element: <ListedBooks />,
    loader: () => fetch("../books.json"),
  },
  {
    path: "/pages-read",
    element: <PagesToRead />,
    loader: () => fetch("../books.json"),
  },
  {
    path: "/book/:bookId",
    element: <BookDetails />,
    loader: () => fetch("../books.json"),
  },
  {
    path: "/book-club",
    element: <BookClub />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
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
