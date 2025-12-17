import { createBrowserRouter } from "react-router-dom";
import LoginView from "../views/login/LoginView";
import Home from "../views/home/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginView />,
      },
    ],
  },
]);

export default router;
