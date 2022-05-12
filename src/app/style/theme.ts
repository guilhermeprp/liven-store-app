import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2f3640",
      light: "#3a4452",
      dark: "#07101a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#66c9d9",
      light: "#9bfcff",
      dark: "#2b98a8",
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
