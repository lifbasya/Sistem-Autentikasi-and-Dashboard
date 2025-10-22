import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import DashboardUser from "@/pages/dashboard/dashboardUsers/dashboardUser";
import NotFound from "../pages/404notfound";
import AddUser from "../pages/dashboard/dashboardUsers/addUser";

export default function Route() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard/user",
      element: <DashboardUser />,
    },
    {
      path: "/dashboard/users/add",
      element: <AddUser />,
    }
  ]);
  return <RouterProvider router={router} />;
}