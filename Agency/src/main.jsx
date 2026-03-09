import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

// In production (Vercel), VITE_API_URL points to your Render backend.
// In development, it's empty and Vite proxy handles /api/ calls.
const apiUrl = import.meta.env.VITE_API_URL;
if (apiUrl) {
  axios.defaults.baseURL = apiUrl;
}
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
