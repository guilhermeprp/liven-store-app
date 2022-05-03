import { ThemeProvider } from "@mui/material";
import React, { ReactElement } from "react";
import Home from "./app/presentation/pages/Home";
import { theme } from "./app/style/theme";

function App(): ReactElement {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
