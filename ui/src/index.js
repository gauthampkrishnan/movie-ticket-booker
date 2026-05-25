import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorFunc from "./components/errorPage";
import Home from "./components/home";
import Movies from "./components/movies";
import Genres from "./components/genres";
import EditMovie from "./components/editMovie";
import ManageCatalogue from "./components/manageCatalogue";
import GraphQL from "./components/graphQl";
import AddMovie from "./components/addMovie";
import Login from "./components/login";
import Movie from "./components/movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorFunc />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <Movie /> },
      { path: "/genres", element: <Genres /> },
      { path: "/add-movie", element: <AddMovie /> },
      { path: "/edit-movie", element: <EditMovie /> },
      { path: "/manage-catalogue", element: <ManageCatalogue /> },
      { path: "/graphql", element: <GraphQL /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
