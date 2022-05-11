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
import { refreshCount } from "../../../../controllers/cart/cart.action";
import { getLocalStorage } from "../../../../infra/localStorage/getLocalStorage";

export default function NavBar(): ReactElement {
  const counter = useSelector(
    (state: RootState) => state.countCartItemsReducer
  );

  const [first, setfirst] = useState([]);

  const products = () => setfirst(getLocalStorage("cart"));

  const dispatch = useDispatch();

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
            onClick={() => products()}
          >
            <Badge badgeContent={counter.value} color="error">
              <Icon.ShoppingCart />
            </Badge>
          </IconButton>

          <Box
            sx={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "primary.dark",
            }}
          >
            {first.map((product: any) => (
              <Stack key={product.id}>
                <Typography>{product.price}</Typography>
                <Typography>{product.title}</Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
