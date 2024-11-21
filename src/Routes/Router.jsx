import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Brands from "../Pages/Brands/Brands";
import Profile from "../Pages/Profile/Profile";
import AboutDev from "../Pages/AboutDev/AboutDev";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import CouponPage from "../components/CouponPage/CouponPage";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage";
import ForgotPassword from "../components/ForgotPassword";
import UpdateInformation from "../Pages/UpdateInformation";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/coupon.json"),
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("/coupon.json"),
      },
      {
        path: "/brands/:id",
        element: (
          <PrivateRoute>
            <CouponPage></CouponPage>
          </PrivateRoute>
        ),
        loader: () => fetch("/coupon.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/update",
        element: (
          <PrivateRoute>
            <UpdateInformation></UpdateInformation>
          </PrivateRoute>
        ),
      },
      {
        path: "/about-dev",
        element: <AboutDev></AboutDev>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);

export default Router;
