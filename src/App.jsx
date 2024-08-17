// App.js
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { CustomThemeProvider } from "./styles/CustomThemeProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomThemeProvider>
        <RouterProvider router={router} />
      </CustomThemeProvider>
    </ThemeProvider>
  );
}

export default App;
