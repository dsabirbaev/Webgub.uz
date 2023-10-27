

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import {lazy} from "react";

const Layout = lazy(() => import("../pages/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Error = lazy(() => import("../pages/Error"));

const Dashboard = lazy(() => import("../pages/Dashboard"));
const DashboardHome = lazy(() => import("../pages/Dashboard/DashboardHome"));

import Students from "../pages/Students";
import Courses from "../pages/Courses";
import Customers from "../pages/Customers";
import Services from "../pages/Services";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>,
                children: [
                    {
                        path: "/dashboard",
                        element: <DashboardHome/>
                    },
                    {
                        path: "/dashboard/students",
                        element: <Students/>
                    },
                    {
                        path: "/dashboard/courses",
                        element: <Courses/>
                    },
                    {
                        path: "/dashboard/customers",
                        element: <Customers/>
                    },
                    {
                        path: "/dashboard/services",
                        element: <Services/>
                    },

                ]
               
            },
           

        ]
    },
    {
        path: "/login",
        element: <Login />
    }

]);

export default router;