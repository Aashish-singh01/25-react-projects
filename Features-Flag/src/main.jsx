import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FeatureFlagGlobalState from "./context/index.jsx";
import FeatureFlags from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <FeatureFlagGlobalState>
      <FeatureFlags />
    </FeatureFlagGlobalState>
  </StrictMode>,
);
