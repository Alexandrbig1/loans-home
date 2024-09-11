import { HelmetProvider } from "react-helmet-async";
import { useTheme } from "../context/ThemeContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import router from "../router/router";

function App() {
  const { isDarkTheme } = useTheme();

  return (
    <HelmetProvider>
      <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
        <GlobalStyle />
        <FontsHelmet />
        <ToastContainer />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
