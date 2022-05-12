/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactElement, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Input,
  Badge,
  Stack,
} from "@mui/material";
import * as Icon from "@mui/icons-material";
import { Dropdown } from "../Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../data/store";
import { SideCard } from "../SideCard/SideCard";

export default function NavBar(): ReactElement {
  const products = useSelector((state: RootState) => state.cartItemsReducer);
  const countItems = useSelector(
    (state: RootState) => state.countCartItemsReducer
  );

  console.log(products);

  const [open, setOpen] = useState(false);

  const cartDropStyles = {
    ...(open
      ? {
          maxWidth: "550px",
          maxHeight: "70vh",
          padding: "1rem",
          overflow: "hidden auto",
        }
      : { maxWidth: "0", maxHeight: "0", overflow: "hidden" }),
    position: "absolute",
    top: "calc(100% - 5px)",
    right: "1.2vw",
    borderRadius: "0.3rem",
    backgroundColor: "primary.main",
    transition: "0.6s",
  };

  return (
    <AppBar id="mainNav" sx={{ backgroundColor: "primary.dark" }}>
      <Toolbar sx={{ gap: "10px" }}>
        <IconButton sx={{ color: "primary.contrastText" }}>
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
        <IconButton sx={{ color: "primary.contrastText" }}>
          <Icon.Person />
        </IconButton>
        <Box>
          <IconButton
            sx={{ color: "primary.contrastText" }}
            onClick={() => setOpen((state) => !state)}
          >
            <Badge badgeContent={countItems} color="error">
              <Icon.ShoppingCart />
            </Badge>
          </IconButton>

          {products.length > 0 && (
            <Box sx={cartDropStyles}>
              <Stack gap={1}>
                {products.map((product: Product) => (
                  <SideCard product={product} key={product.id} />
                ))}
              </Stack>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
