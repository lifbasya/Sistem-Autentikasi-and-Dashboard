import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import DashboardUser from "@/pages/dashboard/dashboardUsers/dashboardUser";
import NotFound from "../pages/404notfound";
import AddUser from "../pages/dashboard/dashboardUsers/addUser";
import DetailUser from "@/pages/dashboard/dashboardUsers/detailUser";

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
    },
    {
      path: "/dashboard/users/:id",
      element: <DetailUser />,
    }
  ]);
  return <RouterProvider router={router} />;
}