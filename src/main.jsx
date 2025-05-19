import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CalculoPesadoComponent } from "./components/CalculoPesadoComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CalculoPesadoComponent />
  </StrictMode>,
);
