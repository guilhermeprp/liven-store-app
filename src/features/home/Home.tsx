import React, { ReactElement } from "react";
import {
  Container,
  Box,
  AppBar,
  Typography,
  Stack,
  Toolbar,
  IconButton,
  InputBase,
  TextField,
  Input,
} from "@mui/material";
import * as Icon from "@mui/icons-material";

export default function Home(): ReactElement {
  return (
    <Stack direction="column">
      <AppBar id="mainNav" enableColorOnDark>
        <Toolbar>
          <IconButton>
            <Icon.Menu />
          </IconButton>
          <Typography variant="h5">Logo</Typography>
          <Box sx={{ ml: "auto" }}>
            <Input
              placeholder="Pesquisar"
              inputProps={{ "aria-label": "pesquisar" }}
            />
          </Box>
          <IconButton>
            <Icon.Person />
          </IconButton>
          <IconButton>
            <Icon.ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: "4rem" }}>
        <Typography variant="h4">Home</Typography>
      </Box>
    </Stack>
  );
}
