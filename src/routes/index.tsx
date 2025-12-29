import { createBrowserRouter } from "react-router-dom";
import LoginView from "../views/login/LoginView";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../views/home/Home";
import Dashboard from "../views/dashboard/Dashboard";
import GenerateContent from "../views/dashboard/generateContent/GenerateContent";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginView />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/generate-content",
            element: <GenerateContent />,
          },
        ],
      },
    ],
  },
]);

export default router;
