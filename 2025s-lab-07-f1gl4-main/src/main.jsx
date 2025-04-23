import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Lab, {loader as labLoader, action as labAction} from "./components/Lab.jsx";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Trigger from "./components/Trigger.jsx";
import Bouncer from "./components/Bouncer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "lab",
        element: <Lab />,
        loader: labLoader,
        action: labAction,
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <Trigger />,
          },
          {
            path: "bouncer/:name",
            element: <Bouncer />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
