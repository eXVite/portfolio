// import { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { routes } from "./constants/Routes";
// import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./themes";
import { LanguageProvider } from "./contexts/TranslationContext";

function App() {
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname !== routes.base || location.pathname !== routes.demos)
  //     navigate(routes.base);
  // });

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
