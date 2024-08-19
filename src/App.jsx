// App.js
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { CustomThemeProvider } from "./styles/CustomThemeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
