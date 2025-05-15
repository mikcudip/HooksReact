import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CalculoPesadoApp } from "./components/CalculoPesadoApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CalculoPesadoApp />
  </StrictMode>,
);
