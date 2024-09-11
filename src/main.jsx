import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import App from "./components/App.jsx";
import { MenuContext } from "./context/ToggleMenuContext.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContext>
      <MenuContext>
        <App />
      </MenuContext>
    </ThemeContext>
  </StrictMode>
);
