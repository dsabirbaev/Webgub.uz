

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";

import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
]);

export default router;