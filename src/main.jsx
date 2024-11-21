import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "../src/Providers/AuthProvider.jsx";
import 'aos/dist/aos.css';
import AOS from 'aos'; 

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={Router} />
            <ToastContainer />
        </AuthProvider>
    </StrictMode>
);
