import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ModalTest from "./modal-test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalTest />
  </StrictMode>,
);
