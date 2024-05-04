import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorElement from "../Pages/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login";
import Signup from "../Pages/Register/Signup";
import Checkout from "../Pages/Checkout/Checkout";

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
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: () =>fetch('services.json'),
      },
      
    ]
  },
]);