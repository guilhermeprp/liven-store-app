import NavBar from "../components/NavBar/NavBar";
import React, { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function Home(): ReactElement {
  return (
    <Stack direction="column">
      <NavBar />
      <Box sx={{ mt: "4rem" }}>
        <Typography variant="h4">Home</Typography>
      </Box>
    </Stack>
  );
}
