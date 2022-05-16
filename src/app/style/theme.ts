import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#002142",
      light: "#193f66",
      dark: "#181c38",
      contrastText: "#fff",
    },
    secondary: {
      main: "#33b0f6",
      light: "#78e2ff",
      dark: "#0081c3",
      contrastText: "#000",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    info: {
      main: "#2196f3",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#fff",
      secondary: "#000",
      disabled: "#bdbdbd",
    },
  },
});
