import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";
import { ToastContainer } from "react-toastify";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Layout />
      <ToastContainer />
    </StrictMode>
  </BrowserRouter>
);
