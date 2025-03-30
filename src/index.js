import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' in React 18+
import App from "./App";
import "./App.css";  // Import the CSS

// Create a root to render the app in React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

