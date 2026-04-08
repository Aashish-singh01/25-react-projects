import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import menus from "./data.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App menus={menus} />
  </StrictMode>,
);
