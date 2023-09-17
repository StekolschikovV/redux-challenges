import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {setupStore} from "./store/store";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
import Authentication from "./Authentication";
import Layout from "./components/Layout";
import {ToastContainer} from "react-toastify";

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
                path: "authentication",
                element: <Authentication/>,
            },
        ],
    }
]);

const store = setupStore();
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
