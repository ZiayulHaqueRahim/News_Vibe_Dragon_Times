import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import { Component } from "react";
import Private from "../Components/PrivateRoute/Private";
import Loading from "../Components/Loading";

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
                hydrateFallbackElement: <Loading />
               }
            ]
        },
        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                {
                    path: '/auth/login',
                    Component: Login
                },
                {
                    path: "/auth/register",
                    Component: Register
                }
            ]
        },
        {
            path:'/news-details/:id',
            element: (
                <Private>
                    <NewsDetails></NewsDetails>
                </Private>
            ),
            loader: ()=>fetch("/news.json"),
            hydrateFallbackElement: <Loading/>
        },
        {
            path: "/*",
            element: <p>Error!!!!</p>
        }
    ]
);

export default router;