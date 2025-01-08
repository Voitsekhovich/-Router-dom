import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Navigate,
    RouteObject,
    Outlet,
} from "react-router-dom";
import { pathToFileURL } from "url";
import App from "../App";
import { Abibas } from "../components/pages/Abibas";
import { Adidas } from "../components/pages/Adidas";
import { Error404 } from "../components/pages/Error404";
import { Model } from "../components/pages/Model";
import { Prices } from "../components/pages/Prices";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Puma } from "../components/pages/Puma";
import { ProtectedRoute } from "../components/pages/ProtectedRoute";
import { Login } from "../components/pages/Login";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTEDPAGE: '/protectedPage',
    ERROR: '/error',
    LOGIN: '/login'
} as const


const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas />

    },
    {
        path: PATH.PUMA,
        element: <Puma />

    },
    {
        path: PATH.ABIBAS,
        element: <Abibas />

    },
    {
        path: PATH.PRICES,
        element: <Prices />

    },
    {
        path: PATH.MODEL,
        element: <Model />

    },
    {
        path: PATH.LOGIN,
        element: <Login />

    },
    {
        path: PATH.ERROR,
        element: <Error404 />

    }
]

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTEDPAGE,
        element: <ProtectedPage />
    },
]
export const PrivateRoute = () => {
    const isAuth = false
    return (<div>{isAuth ? <Outlet /> : <Navigate to={'/login'} />}</div>)
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Navigate to={PATH.ERROR} />,
        children: [
            {
                element: <PrivateRoute />,
                children: privateRoutes
            },
            ...publicRoutes,

        ]
    },

]);

{/*<Route path={'/adidas/:id'} element={<Model/>}/>*/ }