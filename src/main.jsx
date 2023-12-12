import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalContext from "./context/GlobalContex/GlobalContext";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalContext>
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>
        </GlobalContext>
    </React.StrictMode>
);
