import { Box, Typography } from "@mui/material";
import React from "react";

function Error404() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary.main",
      }}
    >
      <Typography variant="h1" color="primary.contrastText">
        Error 404
      </Typography>
      <Typography variant="h2" color="primary.contrastText">
        Failed do Load Page
      </Typography>
    </Box>
  );
}

export default Error404;
