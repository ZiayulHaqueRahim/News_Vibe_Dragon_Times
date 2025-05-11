import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";

import { Component } from "react";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path:"/",
            Component: HomeLayout,
            children:[
                {
                    path: '/',
                    Component: Home,
                },
               {
                path:'/category/:id',
                Component: CategoryNews,
                loader: ()=>fetch("/news.json"),
               },
            ]
        },
        {
            path: "/auth",
            element: <p>auth layout</p>
        },
        {
            path:"/news",
            element: <p>News</p>
        },
        {
            path: "/*",
            element: <p>Error!!!!</p>
        }
    ]
);

export default router;