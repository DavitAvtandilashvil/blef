import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BluffContextProvider } from "./context/BluffContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BluffContextProvider>
      <App />
    </BluffContextProvider>
  </StrictMode>
);
