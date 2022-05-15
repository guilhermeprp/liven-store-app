import { Box, CircularProgress } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary.dark",
      }}
    >
      <CircularProgress color="secondary" size="20vw" />
    </Box>
  );
}

export default Loading;
