import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorElement from "../Pages/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import Signup from "../Pages/Register/Signup";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/BookService/Bookings";
import UpdateProfile from "../Pages/Register/UpdateProfile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: '/book/:id',
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({params}) =>fetch(`https://car-doctor-server-seven-gold.vercel.app/services/${params.id}`),
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
      },
      
    ]
  },
]);