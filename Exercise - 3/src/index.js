import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
