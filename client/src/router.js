import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Pages/NotFound";
import ResultPage, { getScore } from "./Pages/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/result/:id",
    element: <ResultPage />,
    loader: getScore,
  },
]);

export default router;
