import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
import Authentication from "./Authentication";
import Layout from "./components/Layout";
import {ToastContainer} from "react-toastify";
import store from "./store/store";
import Catalog from "./Catalog";
import Product from "./Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "/catalog",
                element: <Catalog/>,
            },
            {
                path: "/product/:id",
                element: <Product/>,
            },
            {
                path: "authentication",
                element: <Authentication/>,
            },
        ],
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
        <ToastContainer/>
    </React.StrictMode>
);
reportWebVitals();
