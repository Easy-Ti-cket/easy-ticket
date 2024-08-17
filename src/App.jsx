// App.js
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import ButtonStyle from "./styles/ButtonStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
