import { createBrowserRouter } from "react-router-dom";
import LoginView from "../views/login/LoginView";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../views/home/Home";
import GenerateContent from "../views/generateContent/GenerateContent";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../views/dashboard/Dashboard";
import Settings from "../views/settings/Settings";
import History from "../views/history/History";

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
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        // children: [
        //   {
        //     path: "/dashboard/generate-content",
        //     element: <GenerateContent />,
        //   },
        // ],
      },
      {
        path:"/generate-content",
        element:<GenerateContent/>
      },
      {
        path:"/generate-content",
        element:<GenerateContent/>
      },
      {
        path:"/history",
        element:<History/>
      },
      {
        path:"/settings",
        element:<Settings/>
      }
    ],
  },
]);

export default router;
