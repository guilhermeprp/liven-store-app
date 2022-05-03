import React, { ReactElement } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Input,
  Button,
  Stack,
} from "@mui/material";
import * as Icon from "@mui/icons-material";
import { Dropdown } from "../Dropdown/Dropdown";

export default function NavBar(): ReactElement {
  return (
    <AppBar id="mainNav" color="primary">
      <Toolbar sx={{ gap: "10px" }}>
        <IconButton>
          <Icon.Menu />
        </IconButton>
        <Typography variant="h5">Logo</Typography>
        <Dropdown label="Casas" />
        <Dropdown label="Banheiro" />
        <Dropdown label="Cozinha" />
        <Dropdown label="Decoração" />

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
  );
}
