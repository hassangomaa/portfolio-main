import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

console.log("main.jsx: ReactDOM rendering App component");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
